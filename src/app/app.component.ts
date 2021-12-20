import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-tailwindcss';
  isPagesMenuOpen: boolean;
  isSideMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  isProfileMenuOpen: boolean;
  dark: boolean;


  constructor(
    private _renderer: Renderer2
  ) {
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
    this.dark = !this.dark;
    if (this.dark) {
      this._renderer.addClass(document.body, 'theme-dark');
    } else {
      this._renderer.removeClass(document.body, 'theme-dark');
    }
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
}
