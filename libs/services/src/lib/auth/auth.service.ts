import {Injectable} from '@angular/core';
import {AuthHttpService} from "./auth.http.service";
import {LoginDTO, LoginResponseDto} from "@dream-car/api-interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private readonly authHttpService: AuthHttpService) {
  }

  public login(body: LoginDTO): Observable<LoginResponseDto> {
    return this.authHttpService.login(body);
  }
}

