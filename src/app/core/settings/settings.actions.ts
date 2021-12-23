import {createAction, props} from '@ngrx/store';

export const actionSettingsInitState = createAction(
  '[Settings] Init State',
  props<{ localStorageVersion: number }>()
);

export const actionSettingsDarkTheme = createAction(
  '[Settings] Change Theme',
  props<{ payload: { dark: boolean } }>()
);

export const actionSettingsPagesMenu = createAction(
  '[Settings] Pages Menu',
  props<{ payload: { isPagesMenuOpen: boolean } }>()
);

export const actionSettingsSideMenu = createAction(
  '[Settings] Pages Menu',
  props<{ payload: { isSideMenuOpen: boolean } }>()
);

export const actionNotificationsMenu = createAction(
  '[Settings] Pages Menu',
  props<{ payload: { isNotificationsMenuOpen: boolean } }>()
);

