import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers
        .set('Access-Control-Allow-Origin', 'X-Requested-With,content-type')
        .set('Access-Control-Allow-Methods', 'GET'),
    });
    return next.handle(authReq);
  }
}
