import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiFeaturesRoutingModule} from './ui-features-routing.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BlankComponent} from './pages/blank/blank.component';


@NgModule({
  declarations: [NotFoundComponent, BlankComponent],
  imports: [
    CommonModule,
    UiFeaturesRoutingModule
  ]
})
export class UiFeaturesModule {
}
