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
  '[Settings] Open Pages Menu',
  props<{ payload: { isPagesMenuOpen: boolean } }>()
);

export const actionOpenSideMenu = createAction(
  '[Settings] Open Side Menu',
  props<{ payload: { isSideMenuOpen: boolean } }>()
);

export const actionOpenNotificationsMenu = createAction(
  '[Settings] Open Notifications Menu',
  props<{ payload: { isNotificationsMenuOpen: boolean } }>()
);

export const actionOpenProfileMenu = createAction(
  '[Settings] Open Profile Menu',
  props<{ payload: { isProfileMenuOpen: boolean } }>()
);



