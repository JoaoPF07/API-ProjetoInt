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
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { EntidadeService } from './entidade.service';
import { ENTIDADE } from './entidade.entity';


@Controller('/entidades')
export class EntidadeController {
  constructor(private readonly entidadeService: EntidadeService){ 

  }

  @Get('listar')

  async listar(): Promise<ENTIDADE[]>{
      return this.entidadeService.listar();

  }

  
  @Post ('')
  async criaEntidade (@Body () dadosEntidade: criaEntidadeDTO): Promise<RetornoCadastroDTO> {
    return this.entidadeService.inserir(dadosEntidade)
  }

  @Get('ID:id')

    async listarID(@Param('id') id:string): Promise<ENTIDADE>{
        return this.entidadeService.localizarID(id);

    }
    @Put (':id')
      async alterarEntidade(@Body() dados: criaEntidadeDTO, @Param ("id") id: string): Promise<RetornoCadastroDTO>{
        return this.entidadeService.alterar(id,dados)
      }
    

      @Delete('remove-:id')
    async removeMarca(@Param('id') id: string): Promise<RetornoObjDTO>{
        return this.entidadeService.remover(id);
    }

  }


