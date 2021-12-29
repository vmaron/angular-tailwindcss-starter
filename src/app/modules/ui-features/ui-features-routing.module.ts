import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BlankComponent} from './pages/blank/blank.component';
import {TablesComponent} from './pages/tables/tables.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';
import {FormsComponent} from './pages/forms/forms.component';
import {CardsComponent} from './pages/cards/cards.component';
import {ChartsComponent} from './pages/charts/charts.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
  {path: 'tables', component: TablesComponent, data: {title: 'Tables'}},
  {path: 'forms', component: FormsComponent, data: {title: 'Forms'}},
  {path: 'charts', component: ChartsComponent, data: {title: 'Charts'}},
  {path: 'cards', component: CardsComponent, data: {title: 'Cards'}},
  {path: 'buttons', component: ButtonsComponent, data: {title: 'Buttons'}},
  {path: 'blank', component: BlankComponent, data: {title: 'Blank'}},
  {path: '404', component: NotFoundComponent, data: {title: 'Page not found'}},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiFeaturesRoutingModule {
}
