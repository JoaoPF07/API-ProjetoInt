import { MinLength, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class criaEntidadeDTO {
    
  @IsEmail(undefined, { message: 'Email inválido!' })
  @EmailUnico({ message: 'Já existe uma entidade com este email' })
  email: string;

  @MinLength(6, { message: 'Tamanho da senha inválida' })
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  nome: string;

  @IsString({ message: 'Telefone inválido!' })
  telefone: string;

  @IsString({ message: 'O CNPJ digitado é inválido!' })
  cnpj: string;

  @IsString({ message: 'O endereço digital é inválido!' })
  endereco: string;

  @IsString({ message: 'Complemento inválido' })
  complemento: string;

  @IsString({ message: 'A cidade digitada é inválida!' })
  cidade: string;

  @IsString({ message: 'O estado digitado é inválido!' })
  estado: string;

  @IsString({ message: 'CEP inválido!' })
  cep: string;
}
