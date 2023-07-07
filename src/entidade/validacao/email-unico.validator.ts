import { EntidadesAmazenadas } from '../entidade.dm';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private clsEntidadesArmazenadas: EntidadesAmazenadas) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const validarEmail = await this.clsEntidadesArmazenadas.validaEmail(value);
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
