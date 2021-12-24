import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ClickOutsideDirective} from '../directives/click-outside.directive';
import {ClickStopPropagation} from '../directives/click-stop-propagation.directive';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SidenavComponent} from './layout/sidenav/sidenav.component';
import {HeaderComponent} from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent, ClickOutsideDirective, ClickStopPropagation, SidenavComponent, HeaderComponent
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
