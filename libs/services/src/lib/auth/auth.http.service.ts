import {BaseHttpService} from "../base.http.service";
import {Login, LoginResponse} from "@dream-car/api-interfaces";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

const url = 'http://localhost:3333/api/auth/login';

@Injectable({providedIn: 'root'})
export class AuthHttpService extends BaseHttpService {

  public login(body: Login): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(url, body);
  }
}

