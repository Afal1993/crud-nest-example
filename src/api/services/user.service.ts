import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async findOne(id:number) {
    return await this.repository.findBy({id});
  }

  async findAll() {
    return await this.repository.find();
  }

  async create(user: User) {
    return await this.repository.save(user)
  }

  async update(id: number, user: User) {
    return await this.repository.update(id, user)
  }

  async delete(id:number) {
    return await this.repository.delete({id});
  }

}
