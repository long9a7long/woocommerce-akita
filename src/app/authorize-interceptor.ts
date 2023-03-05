import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const username = 'ck_cf22d3f60897980f6238837edc7998f8d215dbe5';
    const password = 'cs_0e5592ec6a935a2d41344aa9fc9eb9ff0498466c';
    request = request.clone({
      setHeaders: {
        'Accept-Language': 'vi-VN',
      },
    });
      request = request.clone({
        setHeaders: {
          Authorization: 'Basic ' + btoa(`${username}:${password}`),
        },
      });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof HttpErrorResponse) {
          // client-side error
          console.error(error.error.message);
        } else {
            console.error(error);
        }
        return throwError(error.error);
      })
    );
  }
}