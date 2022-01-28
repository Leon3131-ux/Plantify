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
import {FormsModule} from "@angular/forms";
import {DefaultErrorHandler} from "./errorHandler/default-error-handler";
import {AuthErrorHandler} from "./errorHandler/auth-error-handler";
import {DoNothingErrorHandler} from "./errorHandler/do-nothing-error-handler";
import {InternalServerErrorHandler} from "./errorHandler/internal-server-error-handler";
import {LoginErrorHandler} from "./errorHandler/login-error-handler";
import {NotFoundErrorHandler} from "./errorHandler/not-found-error-handler";
import {ValidationErrorHandler} from "./errorHandler/validation-error-handler";
import {MessageService} from "primeng/api";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
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
    FormsModule
  ],
  providers: [
    DefaultErrorHandler,
    AuthErrorHandler,
    DoNothingErrorHandler,
    InternalServerErrorHandler,
    LoginErrorHandler,
    NotFoundErrorHandler,
    ValidationErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
