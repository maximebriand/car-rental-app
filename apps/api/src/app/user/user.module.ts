import {UserService} from "./user.service";
import {MongooseModule} from "@nestjs/mongoose/dist/mongoose.module";
import {Module} from '@nestjs/common';
import {UserSchema} from "@dream-car/api-schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),

  ],
  providers: [UserService],
  controllers: [],
  exports: [UserService],

})
export class UserModule {
}
