import {Component, OnInit, Renderer2} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {actionSettingsDarkTheme} from './core/settings/settings.actions';
import {selectTheme} from './core/settings/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-tailwindcss';
  isPagesMenuOpen: boolean;
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
  }


  togglePagesMenu(): void {
    this.isPagesMenuOpen = !this.isPagesMenuOpen;
  }

  closeSideMenu(): void {
    this.isSideMenuOpen = false;
  }

  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  toggleNotificationsMenu() {
    this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
  }

  closeNotificationsMenu() {
    this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
  }

  toggleTheme() {
    this.store.dispatch(actionSettingsDarkTheme({payload: {dark: !this.dark}}));
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
}
