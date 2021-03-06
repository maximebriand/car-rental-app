import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport/dist/auth.guard';
import {AuthService} from './auth.service';
import {UserService} from "../user/user.service";
import {Login, Register} from "@dream-car/api-interfaces";

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
  }


  @Get("/onlyauth")
  @UseGuards(AuthGuard("jwt"))
  async hiddenInformation() {
    return "hidden information";
  }

  @Get("/anyone")
  async publicInformation() {
    return "this can be seen by anyone";
  }

  @Post('register')
  async register(@Body() register: Register) {
    const user = await this.userService.create(register);
    const payload = {
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return {user, token};
  }

  @Post('login')
  async login(@Body() loginDTO: Login) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return {...user, token};
  }


}
