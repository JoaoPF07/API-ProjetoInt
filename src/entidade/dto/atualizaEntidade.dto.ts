import { MinLength, IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class AlterarEntidadeDTO {
    
  @IsString()
  @IsOptional ()
  img: string;

  @IsEmail(undefined, { message: 'Email inválido!' })
  @EmailUnico({ message: 'Já existe uma entidade com este email' })
  @IsOptional ()
  email: string;
  
  @MinLength(6, { message: 'Tamanho da senha inválida' })
  @IsOptional ()
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  @IsOptional ()
  nome: string;

  @IsString({ message: 'Telefone inválido!' })
  @IsOptional ()
  telefone: string;

  @IsString({ message: 'O CNPJ digitado é inválido!' })
  @IsOptional ()
  cnpj: string;

  @IsString({ message: 'O endereço digital é inválido!' })
  @IsOptional ()
  endereco: string;

  @IsString({ message: 'Complemento inválido' })
  @IsOptional ()
  complemento: string;

  @IsString({ message: 'A cidade digitada é inválida!' })
  @IsOptional ()
  cidade: string;

  @IsString({ message: 'O estado digitado é inválido!' })
  @IsOptional ()
  estado: string;

  @IsString({ message: 'CEP inválido!' })
  @IsOptional ()
  cep: string;
}

