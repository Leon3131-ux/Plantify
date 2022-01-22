import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register.component";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    RouterModule
  ]
})
export class RegisterModule { }
