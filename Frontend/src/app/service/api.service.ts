import { Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {DefaultErrorHandler} from "../errorHandler/default-error-handler";
import {HttpClient} from "@angular/common/http";
import {HttpResponseErrorHandler} from "../errorHandler/http-response-error-handler";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private defaultErrorHandler: DefaultErrorHandler, private http: HttpClient) { }

  getAll<T>(path: string, params?: {params: any}, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<T[]>{
    return this.http.get<T[]>(`${environment.api_url}${path}`, params).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        return of<T[]>();
      })
    );
  }

  getSingle<T>(path: string, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<T>{
    return this.http.get<T>(`${environment.api_url}${path}`).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        throw error;
      })
    );
  }

  getFile(path: string, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<any>{
    return this.http.get(`${environment.api_url}${path}`, {responseType: 'blob'}).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        throw error;
      })
    );
  }

  postSingle<T>(path: string, object: any = null, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<T>{
    return this.http.post<T>(`${environment.api_url}${path}`, object).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        throw error;
      })
    );
  }

  putSingle<T>(path: string, object: any = null, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<T>{
    return this.http.put<T>(`${environment.api_url}${path}`, object).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        throw error;
      })
    );
  }

  postLogin(path: string, object: any, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, object, {observe: 'response'}).pipe(
      catchError(error => {
        if (errorHandler.matches(error)) {
          errorHandler.handle(error);
        } else {
          this.defaultErrorHandler.handle(error);
        }
        throw error;
      })
    );
  }

  deleteSingle(path: string, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<any>{
    return this.http.delete(`${environment.api_url}${path}`).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        throw error;
      })
    );
  }
}
