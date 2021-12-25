import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
