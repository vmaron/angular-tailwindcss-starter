import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppState, reducers, selectRouterState} from './core.state';
import {StoreModule} from '@ngrx/store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CustomSerializer} from './router/custom-serializer';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';
import {SettingsEffects} from './settings/settings.effects';

export {
  AppState,
  selectRouterState
};

@NgModule({
  declarations: [],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ],
  exports: [],
  imports: [
    CommonModule,
    // ngrx
    StoreModule.forRoot(reducers, {}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      SettingsEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        name: 'Tw Angular Tailwind NgRx Store'
      })
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
