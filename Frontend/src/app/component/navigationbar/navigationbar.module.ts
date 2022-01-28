import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavigationbarComponent} from "./navigationbar.component";



@NgModule({
  declarations: [
    NavigationbarComponent
  ],
  exports: [
    NavigationbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavigationbarModule { }
