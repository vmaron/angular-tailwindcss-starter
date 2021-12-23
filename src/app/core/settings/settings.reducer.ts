import {SettingsState} from './settings.model';
import {actionNotificationsMenu, actionSettingsDarkTheme, actionSettingsPagesMenu, actionSettingsSideMenu} from './settings.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const settingsFeatureKey = 'settings';

export const initialState: SettingsState = {
  dark: false,
  isPagesMenuOpen: false,
  isSideMenuOpen: false,
  isNotificationsMenuOpen: false,
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsDarkTheme,
    actionSettingsPagesMenu,
    actionSettingsSideMenu,
    actionNotificationsMenu,
    (state, action) => ({...state, ...action.payload})
  ),
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
