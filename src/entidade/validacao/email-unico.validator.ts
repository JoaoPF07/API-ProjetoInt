import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ENTIDADE } from '../entidade.entity';
import { EntidadeService } from '../entidade.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private clsEntidadeArmazenada: EntidadeService) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const validarEmail = await this.clsEntidadeArmazenada.validaEmail(value);
    return !validarEmail;
  }
}

export const EmailUnico = (opcaoVaidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcaoVaidacao,
      constraints: [],
      validator: EmailUnicoValidator,
    });
  };
};
