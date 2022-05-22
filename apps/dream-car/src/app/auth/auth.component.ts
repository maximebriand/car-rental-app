import {Component, OnInit} from '@angular/core';
import {AuthService} from "@dream-car/services";

@Component({
  selector: 'dream-car-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

})
export class AuthComponent implements OnInit {
  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.login({"email": "john@gmail.com", "password": "changeme"})
  }
}
