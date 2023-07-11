import { Module } from "@nestjs/common";
import { EntidadeController } from "./entidade.controller";
import { EntidadesAmazenadas } from "./entidade.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";


@Module({
    controllers:[EntidadeController],
    providers: [EntidadesAmazenadas, EmailUnicoValidator],

})

export class EntidadeModule{
    
}