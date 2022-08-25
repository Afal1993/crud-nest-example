import { Controller, Get, Post, Param, Body, HttpStatus, Put, Delete } from '@nestjs/common';
import { LocaleService } from '../services/locale.service';
import { Locale } from '../entities/locale.entity'

@Controller('v1/locales')
export class LocaleController {
  constructor(private readonly service: LocaleService) {}

  @Get(':id')
  async findById(@Param('id') id) {
    try {
      return await this.service.findOne(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.service.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post('')
  async authenticate(@Body() body: Locale) {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body: Locale) {
    return await this.service.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    try {
      return await this.service.delete(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

}
