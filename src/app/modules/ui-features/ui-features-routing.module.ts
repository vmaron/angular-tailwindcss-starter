import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BlankComponent} from './pages/blank/blank.component';
import {TablesComponent} from './pages/tables/tables.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';

const routes: Routes = [
  {path: '', component: NotFoundComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'blank', component: BlankComponent},
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiFeaturesRoutingModule {
}
