import {createAction, props} from '@ngrx/store';

export const actionSettingsInitState = createAction(
  '[Settings] Init State',
  props<{ localStorageVersion: number }>()
);

export const actionChangeDarkTheme = createAction(
  '[Settings] Change Theme',
  props<{ payload: { dark: boolean } }>()
);

export const actionOpenPagesMenu = createAction(
  '[Settings] Pages Menu',
  props<{ payload: { isPagesMenuOpen: boolean } }>()
);

export const actionOpenSideMenu = createAction(
  '[Settings] Pages Menu',
  props<{ payload: { isSideMenuOpen: boolean } }>()
);

export const actionOpenNotificationsMenu = createAction(
  '[Settings] Pages Menu',
  props<{ payload: { isNotificationsMenuOpen: boolean } }>()
);

export const actionOpenProfileMenu = createAction(
  '[Settings] Profile Menu',
  props<{ payload: { isProfileMenuOpen: boolean } }>()
);



