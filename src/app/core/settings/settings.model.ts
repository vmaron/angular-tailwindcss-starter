import { AppState } from '../core.state';

export enum LayoutType {
  Sidenav = 'sidenav',
  Empty = 'empty'
}

export interface SettingsState {
  dark: boolean;
  isPagesMenuOpen: boolean;
  isSideMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  isProfileMenuOpen: boolean;
}

export interface State extends AppState {
  settings: SettingsState;
}
