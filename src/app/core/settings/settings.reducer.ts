import {SettingsState} from './settings.model';
import {actionOpenNotificationsMenu, actionOpenProfileMenu, actionChangeDarkTheme, actionOpenPagesMenu, actionOpenSideMenu} from './settings.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const settingsFeatureKey = 'settings';

export const initialState: SettingsState = {
  dark: false,
  isPagesMenuOpen: false,
  isSideMenuOpen: false,
  isNotificationsMenuOpen: false,
  isProfileMenuOpen: false
};

const reducer = createReducer(
  initialState,
  on(
    actionChangeDarkTheme,
    actionOpenPagesMenu,
    actionOpenSideMenu,
    (state, action) => ({...state, ...action.payload})
  ),
  on(
    actionOpenProfileMenu,
    (state, action) => ({...state, ...action.payload, isNotificationsMenuOpen: false})
  ),
  on(
    actionOpenNotificationsMenu,
    (state, action) => ({...state, ...action.payload, isProfileMenuOpen: false})
  ),
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
