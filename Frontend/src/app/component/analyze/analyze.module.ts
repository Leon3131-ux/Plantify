import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzeComponent} from "./analyze.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {NavigationbarModule} from "../navigationbar/navigationbar.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AnalyzeComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    NavigationbarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AnalyzeModule { }
