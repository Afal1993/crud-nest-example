import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { Locale } from '../entities/locale.entity'
import { Jarvis } from '../utils/jarvis'

@Injectable()
export class LocaleContract implements Contract {

  errors: any[]
  
  validate(model: Locale): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.street, 'A nome da rua é obrigatório.')
    jarvis.isRequired(model.number, 'O número do estabelecimento é obrigatório.')
    jarvis.isRequired(model.city, 'O nome da cidade é obrigatório.')
    jarvis.isRequired(model.state, 'O nome do estado é obrigatório.')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}