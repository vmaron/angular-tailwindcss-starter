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
import {ChartingModule} from '../charting/charting.module';
import {TableComponent} from './components/table/table.component';
import {LegendValueCardComponent} from './components/legend-value-card/legend-value-card.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ModalsComponent} from './pages/modals/modals.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    BlankComponent,
    TablesComponent,
    ButtonsComponent,
    FormsComponent,
    CardsComponent,
    ChartsComponent,
    TableComponent,
    LegendValueCardComponent,
    DashboardComponent,
    ModalsComponent],
  imports: [
    CommonModule,
    UiFeaturesRoutingModule,
    ChartingModule,
  ]
})
export class UiFeaturesModule {
}
