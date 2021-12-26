import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {CreateAccountComponent} from './pages/create-account/create-account.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';


@NgModule({
  declarations: [LoginComponent, CreateAccountComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule {
}
