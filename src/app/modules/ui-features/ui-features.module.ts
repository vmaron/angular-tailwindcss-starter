import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiFeaturesRoutingModule} from './ui-features-routing.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BlankComponent} from './pages/blank/blank.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';
import {TablesComponent} from './pages/tables/tables.component';
import {FormsComponent} from './pages/forms/forms.component';
import {CardsComponent} from './pages/cards/cards.component';
import {ChartsComponent} from './pages/charts/charts.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    BlankComponent,
    TablesComponent,
    ButtonsComponent,
    FormsComponent,
    CardsComponent,
    ChartsComponent],
  imports: [
    CommonModule,
    UiFeaturesRoutingModule
  ]
})
export class UiFeaturesModule {
}
