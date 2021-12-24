import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings} from '@core/settings/settings.selectors';
import {actionOpenNotificationsMenu} from '@core/settings/settings.actions';

@Component({
  selector: 'app-notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.scss']
})
export class NotificationsMenuComponent implements OnInit {
  isNotificationsMenuOpen: boolean;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSettings)).subscribe((settings) => {
      this.isNotificationsMenuOpen = settings.isNotificationsMenuOpen;
    });
  }

  toggleNotificationsMenu() {
    this.store.dispatch(actionOpenNotificationsMenu({payload: {isNotificationsMenuOpen: !this.isNotificationsMenuOpen}}));
  }

  closeNotificationsMenu() {
    this.store.dispatch(actionOpenNotificationsMenu({payload: {isNotificationsMenuOpen: false}}));
  }

}
