import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {Booking} from "@dream-car/api-interfaces";
import {BookingService} from "./booking.service";
import {AuthGuard} from "@nestjs/passport/dist/auth.guard";

@Controller('booking')
export class BookingController {
  constructor(
    private bookingService: BookingService,
  ) {
  }


  @Get("/list")
  // @UseGuards(BookingGuard("jwt"))
  async getAllBooking() {
    return "getAllBooking";
  }

  @Post('new-booking')
  async register(@Body() booking: Booking) {
    console.log(booking)
    const newBooking = await this.bookingService.create(booking);
    return newBooking
  }

  @Get('test')
  @UseGuards(AuthGuard("jwt"))
  async test(@Request() req, @Body() booking: Booking) {
    booking.userId = req.user._id;
    const newBooking = await this.bookingService.create(booking);
    return ' ' + newBooking
  }

}
