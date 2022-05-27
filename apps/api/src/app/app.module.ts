import {Module} from '@nestjs/common';

import {MongooseModule} from '@nestjs/mongoose/dist/mongoose.module';

import {AppController} from './app.controller';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
