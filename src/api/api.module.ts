import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locale } from './entities/locale.entity';
import { LocaleService } from './services/locale.service';
import { LocaleController } from './controllers/locale.controller';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Locale, User])],
  providers: [LocaleService, UserService],
  controllers: [LocaleController, UserController],
})

export class ApiModule {}
