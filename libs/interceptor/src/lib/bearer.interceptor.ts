import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthRepository} from "../../../services/src/lib/auth/auth.repo";
import {distinctUntilChanged, Observable, switchMap} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthRepository) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.token$.pipe(
      distinctUntilChanged(),
      switchMap(token => {
        const newRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });

        return next.handle(newRequest);
      })
    )
  }
}
