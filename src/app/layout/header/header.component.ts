import {Component, OnInit, Renderer2} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings, selectTheme} from '../../core/settings/settings.selectors';
import {actionChangeDarkTheme, actionOpenNotificationsMenu, actionOpenProfileMenu, actionOpenSideMenu} from '../../core/settings/settings.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSideMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  isProfileMenuOpen: boolean;
  dark: boolean;


  constructor(
    private _renderer: Renderer2,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectTheme)).subscribe((dark) => {
      this.dark = dark;
      if (this.dark) {
        this._renderer.addClass(document.body, 'theme-dark');
      } else {
        this._renderer.removeClass(document.body, 'theme-dark');
      }
    });
    this.store.pipe(select(selectSettings)).subscribe((settings) => {
      this.isNotificationsMenuOpen = settings.isNotificationsMenuOpen;
      this.isSideMenuOpen = settings.isSideMenuOpen;
      this.isNotificationsMenuOpen = settings.isNotificationsMenuOpen;
      this.isProfileMenuOpen = settings.isProfileMenuOpen;
    });
  }

  closeSideMenu(): void {
    this.store.dispatch(actionOpenSideMenu({payload: {isSideMenuOpen: false}}));
  }

  toggleSideMenu(): void {
    this.store.dispatch(actionOpenSideMenu({payload: {isSideMenuOpen: !this.isSideMenuOpen}}));
  }

  toggleNotificationsMenu() {
    this.store.dispatch(actionOpenNotificationsMenu({payload: {isNotificationsMenuOpen: !this.isNotificationsMenuOpen}}));
  }

  closeNotificationsMenu() {
    this.store.dispatch(actionOpenNotificationsMenu({payload: {isNotificationsMenuOpen: false}}));
  }

  toggleTheme() {
    this.store.dispatch(actionChangeDarkTheme({payload: {dark: !this.dark}}));
  }

  toggleProfileMenu() {
    this.store.dispatch(actionOpenProfileMenu({payload: {isProfileMenuOpen: !this.isProfileMenuOpen}}));
  }

  closeProfileMenu() {
    this.store.dispatch(actionOpenProfileMenu({payload: {isProfileMenuOpen: false}}));
  }

}
