import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {ClickOutsideDirective} from '../directives/click-outside.directive';
import {ClickStopPropagation} from '../directives/click-stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent, ClickOutsideDirective, ClickStopPropagation
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
