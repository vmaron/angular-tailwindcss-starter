import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {actionOpenSideMenu} from '@core/settings/settings.actions';
import {selectSettings} from '@core/settings/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-material-tailwindcss';
  isSideMenuOpen: boolean;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSettings)).subscribe((settings) => {
      this.isSideMenuOpen = settings.isSideMenuOpen;
    });
  }

  closeSideMenu(): void {
    this.store.dispatch(actionOpenSideMenu({payload: {isSideMenuOpen: false}}));
  }
}
