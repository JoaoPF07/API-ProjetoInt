import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { criaEntidadeDTO } from './dto/entidade.dto';
import { listaEntidadeDTO } from './dto/listaEntidade.dto';
import { EntidadesAmazenadas } from './entidade.dm';
import { EntidadeEntity } from './entidade.entity';
import { v4 as uuid } from 'uuid';
import { AlterarEntidadeDTO } from './dto/atualizaEntidade.dto';

@Controller('/entidades')
export class EntidadeController {
  constructor(private clsEntidadesArmazenadas: EntidadesAmazenadas) {}

  @Get()
  async RetornoEntidades() {
    const entidadesListadas = await this.clsEntidadesArmazenadas.Entidades;
    const listaRetorno = entidadesListadas.map(
      (entidade) => new listaEntidadeDTO(entidade.id, entidade.nome),
    );
    return listaRetorno;
  }

  @Post()
  async criaEntidade(@Body() dadosEntidade: criaEntidadeDTO) {
    var entidade = new EntidadeEntity(
      uuid(),
      dadosEntidade.email,
      dadosEntidade.senha,
      dadosEntidade.nome,
      dadosEntidade.telefone,
      dadosEntidade.cnpj,
      dadosEntidade.endereco,
      dadosEntidade.complemento,
      dadosEntidade.cidade,
      dadosEntidade.estado,
      dadosEntidade.cep,
    );

    var retornoEntidade;

    this.clsEntidadesArmazenadas.AdicionarEntidade(entidade);
        retornoEntidade={
            id: entidade.id,
            message:"Entidade Criada!"
            }

            return retornoEntidade;
    }

  @Put('/:id')
  async atualizaEntidade(
    @Param('id') id: string,
    @Body() novosDados: Partial<AlterarEntidadeDTO>,
  ) {
    const entidadeAtualizada =
      await this.clsEntidadesArmazenadas.atualizaEntidade(id, novosDados);
    return {
      entidade: entidadeAtualizada,
      message: 'Entidade Atualizada',
    };
  }

  @Delete('/:id')
  async deleteEntidade(@Param('id') id: string) {
    const entidadeDeletada = await this.clsEntidadesArmazenadas.deleteEntidade(
      id,
    );
    return {
      entidade: entidadeDeletada,
      message: 'Entidade Deletada',
    };
  }
}
