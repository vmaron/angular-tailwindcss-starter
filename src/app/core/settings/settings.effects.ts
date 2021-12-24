import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {selectSettingsState} from '../core.state';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {SettingsState, State} from './settings.model';
import {tap, withLatestFrom} from 'rxjs/operators';
import {actionChangeDarkTheme, actionSettingsInitState} from './settings.actions';

export const SETTINGS_KEY = 'SETTINGS';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {
  }

  initSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionSettingsInitState
        ),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) => {
            const storageSettings: SettingsState = this.localStorageService.getItem(SETTINGS_KEY);
            if (storageSettings) {
              const {dark} = storageSettings;
              this.store.dispatch(actionChangeDarkTheme({payload: {dark}}));
            } else {
              this.localStorageService.setItem(SETTINGS_KEY, settings);
            }
          }
        )
      ),
    {dispatch: false}
  );

  persistSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionChangeDarkTheme
        ),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) =>
          this.localStorageService.setItem(SETTINGS_KEY, settings)
        )
      ),
    {dispatch: false}
  );

}
