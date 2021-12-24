import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ClickOutsideDirective} from '../directives/click-outside.directive';
import {ClickStopPropagation} from '../directives/click-stop-propagation.directive';
import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SidenavComponent} from './layout/sidenav/sidenav.component';
import {HeaderComponent} from './layout/header/header.component';
import {SearchInputComponent} from '@shared/components/search-input/search-input.component';
import {ProfileMenuComponent} from './layout/profile-menu/profile-menu.component';
import {NotificationsMenuComponent} from './layout/notifications-menu/notifications-menu.component';
import {ThemeTogglerComponent} from './layout/theme-toggler/theme-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    ClickStopPropagation,
    SidenavComponent,
    HeaderComponent,
    SearchInputComponent,
    ProfileMenuComponent,
    NotificationsMenuComponent,
    ThemeTogglerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
