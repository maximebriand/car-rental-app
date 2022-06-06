import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Booking, Car} from "@dream-car/api-interfaces";


@Injectable()
export class BookingService {

  constructor(
    @InjectModel('Car') private carModel: Model<Car>,
    @InjectModel('Booking') private bookingModel: Model<Booking>,
  ) {
  }


  // changer pour un car available
  async create(booking: Booking) {
    console.log(booking)
    const {numberPlate} = booking;
    const {_id} = await this.carModel.findOne({numberPlate});

    booking.numberPlate = _id;
    const createdBooking = new this.bookingModel(booking);

    await createdBooking.save();
    return createdBooking;
  }

  async findByNumberPlate(numberPlate: string) {
    return this.bookingModel.findOne({numberPlate});
  }

}
