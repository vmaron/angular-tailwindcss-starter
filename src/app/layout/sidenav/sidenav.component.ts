import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings} from '@core/settings/settings.selectors';
import {actionOpenPagesMenu} from '@core/settings/settings.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isPagesMenuOpen: boolean;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSettings)).subscribe((settings) => {
      this.isPagesMenuOpen = settings.isPagesMenuOpen;
    });
  }

  togglePagesMenu(): void {
    this.store.dispatch(actionOpenPagesMenu({payload: {isPagesMenuOpen: !this.isPagesMenuOpen}}));
  }

}
