import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { User } from '../entities/user.entity'
import { Jarvis } from '../utils/jarvis'

@Injectable()
export class UserContract implements Contract {

  errors: any[]
  
  validate(model: User): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.fullName, 'O nome completo é obrigatório.')
    jarvis.isRequired(model.email, 'O Email do usuário é obrigatório.')
    jarvis.isRequired(model.password, 'A senha do usuário é obrigatório.')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}