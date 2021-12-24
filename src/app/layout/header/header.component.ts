import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings} from '@core/settings/settings.selectors';
import {actionOpenSideMenu} from '@core/settings/settings.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  toggleSideMenu(): void {
    this.store.dispatch(actionOpenSideMenu({payload: {isSideMenuOpen: !this.isSideMenuOpen}}));
  }

}
