import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { Locale } from '../entities/locale.entity'
import { Jarvis } from '../utils/jarvis'

@Injectable()
export class LocaleContract implements Contract {

  errors: any[]
  
  validate(model: Locale): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.name, 'A nome do cliente é obrigatório.')
    jarvis.isRequired(model.deliveryDate, 'A data de entrega é obrigatória.')
    jarvis.isRequired(model.startPoint, 'O ponto de partida é obrigatório.')
    jarvis.isRequired(model.destinationPoint, 'O ponto de destino é obrigatório.')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}