import {Document} from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  role: string;
}

export interface Payload {
  email: string;
}
