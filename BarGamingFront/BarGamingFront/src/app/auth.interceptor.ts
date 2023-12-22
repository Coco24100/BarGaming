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
    const utilisateur = this.authService.getUtilisateur();
    if(utilisateur) {

      const b64 = btoa(utilisateur.username + ":" + utilisateur.password); 

      request = request.clone({
          setHeaders: { 
              Authorization: `Basic ${b64}`
          }
      });

    }

    return next.handle(request);
  }
}
