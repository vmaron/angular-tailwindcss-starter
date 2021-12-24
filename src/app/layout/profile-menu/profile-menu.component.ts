import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectSettings} from '@core/settings/settings.selectors';
import {actionOpenProfileMenu} from '@core/settings/settings.actions';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  isProfileMenuOpen: boolean;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSettings)).subscribe((settings) => {
      this.isProfileMenuOpen = settings.isProfileMenuOpen;
    });
  }

  toggleProfileMenu() {
    this.store.dispatch(actionOpenProfileMenu({payload: {isProfileMenuOpen: !this.isProfileMenuOpen}}));
  }

  closeProfileMenu() {
    this.store.dispatch(actionOpenProfileMenu({payload: {isProfileMenuOpen: false}}));
  }

}
