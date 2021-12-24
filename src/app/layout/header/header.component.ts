import {Component, OnInit, Renderer2} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings, selectTheme} from '@core/settings/settings.selectors';
import {actionChangeDarkTheme, actionOpenSideMenu} from '@core/settings/settings.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSideMenuOpen: boolean;
  dark: boolean;

  constructor(private _renderer: Renderer2, private store: Store) {
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
      this.isSideMenuOpen = settings.isSideMenuOpen;
    });
  }

  closeSideMenu(): void {
    this.store.dispatch(actionOpenSideMenu({payload: {isSideMenuOpen: false}}));
  }

  toggleSideMenu(): void {
    this.store.dispatch(actionOpenSideMenu({payload: {isSideMenuOpen: !this.isSideMenuOpen}}));
  }

  toggleTheme() {
    this.store.dispatch(actionChangeDarkTheme({payload: {dark: !this.dark}}));
  }

}
