import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {NavigationbarComponent} from "../navigationbar/navigationbar.component";



@NgModule({
    declarations: [
        ProfileComponent,
        NavigationbarComponent
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule
    ]
})
export class ProfileModule { }
