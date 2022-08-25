import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Locale } from '../entities/locale.entity'

@Injectable()
export class LocaleService {

  constructor(@InjectRepository(Locale)
    private readonly repository: Repository<Locale>
  ) {}

  async findOne(id:number) {
    return await this.repository.findBy({id});
  }

  async findAll() {
    return await this.repository.find();
  }

  async create(locale: Locale) {
    return await this.repository.save(locale)
  }

  async update(id: number, locale: Locale) {
    return await this.repository.update(id, locale)
  }

  async delete(id:number) {
    return await this.repository.delete({id});
  }

}
