import {Body, Controller, Get, Post} from '@nestjs/common';
import {Car} from "@dream-car/api-interfaces";
import {CarService} from "./car.service";

@Controller('car')
export class CarController {
  constructor(
    private carService: CarService,
  ) {
  }


  @Get("/list")
  // @UseGuards(CarGuard("jwt"))
  async getAllCars() {
    return "getAllCars";
  }

  @Post('add-new-car')
  async register(@Body() car: Car) {
    console.log(car)
    const newCar = await this.carService.create(car);
    return newCar
  }

}
