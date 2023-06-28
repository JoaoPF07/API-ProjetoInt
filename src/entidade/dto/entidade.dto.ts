import { MinLength, IsEmail ,IsNotEmpty, IsString, IsInt} from "class-validator";

export class criaEntidadeDTO {
    @IsString()
    @IsNotEmpty ({message: "O nome não pode estar vazio!"})
    nome:string;

    @IsString ({message: "Idade inválida!"})
    endereco:string;

    @IsString ({message: "Telefone inválido!"})
    telefone:string;

    @IsEmail (undefined, {message: "Email inválido!"})
    @EmailUnico ({message: "Já existe uma entidade com este email"})
    email: string;


    @MinLength (6,{message: "Tamanho da senha inválida"})
    senha: string;



}