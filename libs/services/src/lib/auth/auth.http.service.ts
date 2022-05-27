import {BaseHttpService} from "../base.http.service";
import {LoginDTO, LoginResponseDto} from "@dream-car/api-interfaces";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

const url = 'http://localhost:3333/api/auth/login';

@Injectable({providedIn: 'root'})
export class AuthHttpService extends BaseHttpService {

  public login(body: LoginDTO): Observable<LoginResponseDto> {
    return this._http.post<LoginResponseDto>(url, body);
  }
}

