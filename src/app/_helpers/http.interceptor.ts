import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StorageService } from '../services/storage.service';
import { EventBusService } from '../_shared/event-bus.service';
import { EventData } from '../_shared/event.class';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private storageService: StorageService, private eventBusService: EventBusService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   req = req.clone({
  //     withCredentials: true,
  //   });

  //   return next.handle(req).pipe(
  //     catchError((error) => {
  //       if (
  //         error instanceof HttpErrorResponse &&
  //         !req.url.includes('api/auth/signin') &&
  //         error.status === 401
  //       ) {
  //         return this.handle401Error(req, next);
  //       }

  //       return throwError(() => error);
  //     })
  //   );
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from local storage
    const authToken = localStorage.getItem('token');
    
    // Clone the request and add the auth token to the headers
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Send the cloned request to the next handler
    return next.handle(authRequest);
  }


  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
