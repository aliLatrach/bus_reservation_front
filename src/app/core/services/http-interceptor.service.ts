import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  private formatErrors(error: any) {
    let errorFormated = new ErrorEvent('HttpErrorResponse', {
      error: new Error(error),
      message: error.error
    });
    return  throwError(() => errorFormated );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      catchError(err => this.formatErrors(err)));
  } 
}
