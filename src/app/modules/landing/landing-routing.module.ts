import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CreateAccountComponent} from './pages/create-account/create-account.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: '', component: LoginComponent, data: {title: 'Login'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'forgot-password', component: ForgotPasswordComponent, data: {title: 'Forgot Password'}},
  {path: 'create-account', component: CreateAccountComponent, data: {title: 'Create Account'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
