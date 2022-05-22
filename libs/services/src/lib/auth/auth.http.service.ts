import {BaseHttpService} from "../base.http.service";
import {LoginDTO} from "@dream-car/api-interfaces";
import {Injectable} from "@angular/core";

const url = 'http://localhost:3333/api/auth/login';

@Injectable({providedIn: 'root'})
export class AuthHttpService extends BaseHttpService {

  public login(body: LoginDTO): void {
    this._http.post(url, body).subscribe(console.log)
  }
}

