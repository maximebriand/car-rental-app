import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Car} from "@dream-car/api-interfaces";


@Injectable()
export class CarService {

  constructor(
    @InjectModel('Car') private carModel: Model<Car>,
  ) {
  }

  async create(car: Car) {
    const {numberplate} = car;
    const isExistingCar = await this.carModel.findOne({numberplate});
    if (isExistingCar) {
      throw new HttpException('car already exists', HttpStatus.BAD_REQUEST);
    }

    const createdCar = new this.carModel(car);

    await createdCar.save();
    return this.sanitizeCar(createdCar);
  }

  async findByNumberPlate(numberPlate: string) {
    return this.carModel.findOne({numberPlate});
  }

  sanitizeCar(car: Car) {
    const sanitized = car.toObject();
    delete sanitized['password'];
    return sanitized;
  }

}
