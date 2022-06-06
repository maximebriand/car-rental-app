import {MongooseModule} from "@nestjs/mongoose/dist/mongoose.module";
import {Module} from '@nestjs/common';
import {BookingSchema, CarSchema} from "@dream-car/api-schemas";
import {BookingController} from "./booking.controller";
import {BookingService} from "./booking.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Booking', schema: BookingSchema}, {name: 'Car', schema: CarSchema}]),
  ],
  providers: [BookingService],
  controllers: [BookingController],

})
export class BookingModule {
}

