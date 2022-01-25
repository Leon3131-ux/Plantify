import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginModule} from "./component/login/login.module";
import {RegisterModule} from "./component/register/register.module";
import {ProfileModule} from "./component/profile/profile.module";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {HomeComponent} from './component/home/home.component';
import {HomeModule} from "./component/home/home.module";
import {NavigationbarComponent} from "./component/navigationbar/navigationbar.component";


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "home", component: HomeComponent},
  {path: "**", component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    RegisterModule,
    ProfileModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
