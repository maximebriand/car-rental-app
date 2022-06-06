import {Document} from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  role: string;
}

export interface Payload {
  email: string;
}


export interface Car extends Document {
  numberplate: string;
  brand: string;
  powerful: number;
  seats: number;
  restriction: RentalRestriction;
}


export interface RentalRestriction extends Document {
  miniAge: number;
  licenceDriverOlderThan: number
}

export interface Booking extends Document {
  startingDate: Date,
  endingDate: Date,
  numberPlate: string,
  userId: string
}
