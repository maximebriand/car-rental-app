import {Injectable} from '@angular/core';
import {AuthHttpService} from "./auth.http.service";
import {LoginDTO} from "@dream-car/api-interfaces";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private readonly authHttpService: AuthHttpService) {
  }

  public login(body: LoginDTO): void {
    this.authHttpService.login(body);
  }
}

