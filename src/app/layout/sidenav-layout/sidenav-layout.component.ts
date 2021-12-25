import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings} from '@core/settings/settings.selectors';
import {actionOpenSideMenu} from '@core/settings/settings.actions';

@Component({
  selector: 'app-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent implements OnInit {
  isSideMenuOpen: boolean;
  layout: string;

  constructor(
    private store: Store) {
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
