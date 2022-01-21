import {HttpResponseErrorHandler} from './http-response-error-handler';
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {MessageService} from 'primeng/api';

@Injectable()
export class AuthErrorHandler implements HttpResponseErrorHandler{

  constructor(private messageService: MessageService) {}

  matches(error: HttpErrorResponse): boolean {
    return error.status === 403;
  }

  handle(error: HttpErrorResponse): void {
    if (environment.generic_error_message){
      this.handleGeneric(error);
    }else{
      this.handleNonGeneric(error);
    }
  }

  handleGeneric(error: HttpErrorResponse){
    this.messageService.add({
      severity: 'error',
      summary: 'Error 403',
      detail: 'Forbidden Request',
      life: 5000
    });
  }

  handleNonGeneric(error: HttpErrorResponse){
    if (error.error){
      this.messageService.add({severity: 'error', summary: "Error", detail: error.error.message, life: 5000});
    }else{
      this.messageService.add({severity: 'error', summary: "Error", detail: error.message, life: 5000});
    }
  }
}
