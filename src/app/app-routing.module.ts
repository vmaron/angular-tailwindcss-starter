import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutType} from '@core/settings/settings.model';

const routes: Routes = [
  {
    path: 'pages', data: {layout: LayoutType.Sidenav},
    loadChildren: () => import('./modules/ui-features/ui-features.module').then(m => m.UiFeaturesModule),
  },
  {
    path: 'home', data: {layout: LayoutType.Empty},
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: '**',
    redirectTo: '/home/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
