import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavigationbarModule} from "../navigationbar/navigationbar.module";
import {ResultComponent} from "./result.component";



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationbarModule
  ]
})
export class ResultModule { }
