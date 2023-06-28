import { Body, Controller, Get, Post } from "@nestjs/common";
import { criaEntidadeDTO } from "./dto/entidade.dto";
import { listaEntidadeDTO } from "./dto/listaEntidade.dto";
import { EntidadesAmazenadas } from "./entidade.dm";


@Controller ('/entidades')

export class EntidadeController {

    constructor ( private clsEntidadesArmazenadas: EntidadesAmazenadas){
    }

    @Get ()
    async RetornoEntidades() {
        const entidadesListadas = await this.clsEntidadesArmazenadas.Entidades;
        const listaRetorno = entidadesListadas.map(
            entidade => new listaEntidadeDTO (
                entidade.id,
                entidade.nome
            )
        );
            return listaRetorno;
    }

    @Post ()
        async criaEntidade ( @Body () dadosEntidade: criaEntidadeDTO) {
            
        }


}