import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ValidateModule } from './validate/validate.module';

@Module({
  imports: [UserModule, ValidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
