import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import {routerFeatureKey, RouterStateUrl} from './router/router.state';

import {settingsFeatureKey, settingsReducer} from './settings/settings.reducer';
import {SettingsState} from './settings/settings.model';


export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  router: routerReducer
};

export const selectSettingsState = createFeatureSelector<AppState, SettingsState>(settingsFeatureKey);
export const selectRouterState = createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>(routerFeatureKey);


export interface AppState {
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
