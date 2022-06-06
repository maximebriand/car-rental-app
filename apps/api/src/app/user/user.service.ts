import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import * as bcrypt from 'bcrypt';
import {Login, Payload, Register, ROLES, User} from "@dream-car/api-interfaces";


@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private userModel: Model<User>,
  ) {
  }

  async create(Register: Register, role: string = ROLES.Customer) {
    const {email} = Register;
    const user = await this.userModel.findOne({email});
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.userModel(Register);
    createdUser.role = role;

    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async findByPayload(payload: Payload) {
    const {email} = payload;
    return await this.userModel.findOne({email});
  }

  async findByLogin(UserDTO: Login) {
    const {email, password} = UserDTO;
    const user = await this.userModel.findOne({email});
    if (!user) {
      throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user)
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }

  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
  }

}
