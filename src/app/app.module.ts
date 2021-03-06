import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {SidenavLayoutComponent} from './layout/sidenav-layout/sidenav-layout.component';
import {EmptyLayoutComponent} from './layout/empty-layout/empty-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    ThemeTogglerComponent,
    SidenavLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
