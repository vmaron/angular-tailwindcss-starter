import { AppState } from '../core.state';

export interface SettingsState {
  dark: boolean;
  isPagesMenuOpen: boolean;
  isSideMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
}

export interface State extends AppState {
  settings: SettingsState;
}
