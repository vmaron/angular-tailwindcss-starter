import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./modules/ui-features/ui-features.module').then(m => m.UiFeaturesModule),
  },
  {
    path: '**',
    redirectTo: '/pages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
