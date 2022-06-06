import {MongooseModule} from "@nestjs/mongoose/dist/mongoose.module";
import {Module} from '@nestjs/common';
import {CarSchema} from "@dream-car/api-schemas";
import {CarController} from "./car.controller";
import {CarService} from "./car.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Car', schema: CarSchema}]),
    CarModule
  ],
  providers: [CarService],
  controllers: [CarController],

})
export class CarModule {
}
