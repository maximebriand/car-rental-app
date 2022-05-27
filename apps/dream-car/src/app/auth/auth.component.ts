import {Component, OnInit} from '@angular/core';
import {AuthService} from "@dream-car/services";
import {AuthRepository} from "../../../../../libs/services/src/lib/auth/auth.repo";
import {LoginResponseDto} from "@dream-car/api-interfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dream-car-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

})
export class AuthComponent implements OnInit {
  constructor(private readonly authService: AuthService, private readonly authRepository: AuthRepository, private readonly _http: HttpClient) {
  }

  ngOnInit(): void {
    this.authService.login({
      "email": "john@gmail.com",
      "password": "changeme"
    }).subscribe((login: LoginResponseDto) => this.authRepository.updateUser(login));

    setTimeout(() => {
      this._http.get('http://localhost:3333/api/').subscribe()
    }, 1000)
  }
}
