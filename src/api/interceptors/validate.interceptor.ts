import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Contract } from '../contracts/contract'

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {

  constructor(public contract: Contract) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const body = context.switchToHttp().getRequest().body
    const valid = this.contract.validate(body)

    if (!valid)
      throw new HttpException(this.contract.errors, HttpStatus.BAD_REQUEST)

    return next.handle()
  }
  
}