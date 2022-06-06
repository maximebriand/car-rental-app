import {Injectable} from '@angular/core';
import {AuthHttpService} from "./auth.http.service";
import {Login, LoginResponse} from "@dream-car/api-interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private readonly authHttpService: AuthHttpService) {
  }

  public login(body: Login): Observable<LoginResponse> {
    return this.authHttpService.login(body);
  }
}

