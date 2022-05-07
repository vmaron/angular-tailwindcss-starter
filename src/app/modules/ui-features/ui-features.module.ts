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
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogsModule} from '../dialogs/dialogs.module';
import {NewsletterModalComponent} from './components/newsletter-modal/newsletter-modal.component';
import {NewsletterDrawerComponent} from './components/newsletter-drawer/newsletter-drawer.component';
import {ModalsComponent} from './pages/modals/modals.component';
import {DrawersComponent} from './pages/drawers/drawers.component';
import {MultivalueTextInputModule} from '../multivalue-text-input/multivalue-text-input.module';


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
    ModalsComponent,
    NewsletterModalComponent,
    NewsletterDrawerComponent,
    DrawersComponent],
  imports: [
    CommonModule,
    UiFeaturesRoutingModule,
    ChartingModule,
    DialogsModule,
    FormsModule,
    ReactiveFormsModule,
    MultivalueTextInputModule
  ],
  providers: [FormBuilder]
})
export class UiFeaturesModule {
}
