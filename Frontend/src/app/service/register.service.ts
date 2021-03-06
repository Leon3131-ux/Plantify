import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apiService: ApiService) { }

  register(registerFormData: any): Observable<any>{
      return this.apiService.postSingle("/register/", registerFormData);
  }
}
