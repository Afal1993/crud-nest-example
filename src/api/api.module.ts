import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locale } from './entities/locale.entity';
import { LocaleService } from './services/locale.service';
import { LocaleController } from './controllers/locale.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Locale])],
  providers: [LocaleService],
  controllers: [LocaleController],
})
export class ApiModule {}
