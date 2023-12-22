import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const client = this.authService.getClient();
    if(client) {

      const b64 = btoa(client.nom + ":" + client.nom); 

      request = request.clone({
          setHeaders: { 
              Authorization: `Basic ${b64}`
          }
      });

    }

    return next.handle(request);
  }
}
