import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzeComponent} from "./analyze.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {NavigationbarModule} from "../navigationbar/navigationbar.module";



@NgModule({
  declarations: [
    AnalyzeComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    NavigationbarModule

  ]
})
export class AnalyzeModule { }
