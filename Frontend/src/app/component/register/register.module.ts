import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register.component";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    InputTextModule
  ]
})
export class RegisterModule { }
