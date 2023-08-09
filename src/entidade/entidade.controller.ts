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
import { AlterarEntidadeDTO } from './dto/atualizaEntidade.dto';
import { RetornoCadastroDTO } from 'src/dto/retorno.dto';
import { EntidadeService } from './entidade.service';

@Controller('/entidades')
export class EntidadeController {
  constructor(private readonly entidadeService: EntidadeService){ }

  @Get('listar')

  async listar(): Promise<EntidadeEntity[]>{
      return this.entidadeService.listar();

  }

  
  @Post ('')
  async criaEntidade (@Body () dadosEntidade: criaEntidadeDTO): Promise<RetornoCadastroDTO> {
    return this.entidadeService.inserir(dadosEntidade)
  }

  @Get('ID:id')

    async listarID(@Param('id') id:string): Promise<EntidadeEntity>{
        return this.entidadeService.listarID(id);

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
