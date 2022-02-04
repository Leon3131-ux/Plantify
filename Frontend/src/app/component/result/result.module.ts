import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CardModule} from 'primeng/card';
import { MatCardModule } from "@angular/material/card";
import {NavigationbarModule} from "../navigationbar/navigationbar.module";
import {ResultComponent} from "./result.component";



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    MatCardModule,
    NavigationbarModule
  ],
})
export class ResultModule { }
