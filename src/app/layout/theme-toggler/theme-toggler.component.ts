import {Component, OnInit, Renderer2} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectTheme} from '@core/settings/settings.selectors';
import {actionChangeDarkTheme} from '@core/settings/settings.actions';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {
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
  }

  toggleTheme() {
    this.store.dispatch(actionChangeDarkTheme({payload: {dark: !this.dark}}));
  }

}
