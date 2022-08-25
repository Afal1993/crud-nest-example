import { Controller, Get, Post, Param, Body, HttpStatus, Put, Delete, UseInterceptors } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { UserContract } from '../contracts/user.contract';
import { ValidatorInterceptor } from '../interceptors/validate.interceptor';

@Controller('v1/users')
export class UserController {
  constructor(private readonly service: UserService) {}

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
  @UseInterceptors(new ValidatorInterceptor(new UserContract))
  async create(@Body() body: User) {
    return await this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body: User) {
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
