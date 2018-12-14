import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../model/shared/shared.module';

import {  RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports : [

  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
