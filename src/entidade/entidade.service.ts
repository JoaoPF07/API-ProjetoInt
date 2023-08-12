import { Injectable, Inject } from '@nestjs/common';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import { criaEntidadeDTO } from './dto/entidade.dto';
import { ENTIDADE } from './entidade.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EntidadeService {
  constructor(
    @Inject('ENTIDADE_REPOSITORY')
    private entidadeRepository: Repository<ENTIDADE>,
  ) {}

  async listar(): Promise<ENTIDADE[]> {
    return this.entidadeRepository.find();
  }

  async inserir(dados: criaEntidadeDTO): Promise<RetornoCadastroDTO> {
    let Entidade = new ENTIDADE();
    Entidade.ID = uuid();
    Entidade.email = dados.email;
    Entidade.senha = dados.senha;
    Entidade.nome = dados.nome;
    Entidade.telefone = dados.telefone;
    Entidade.cnpj = dados.cnpj;
    Entidade.endereco = dados.endereco;
    Entidade.complemento = dados.complemento;
    Entidade.cidade = dados.cidade;
    Entidade.estado = dados.estado;
    Entidade.cep = dados.cep;

    return this.entidadeRepository
      .save(Entidade)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: Entidade.ID,
          message: 'Entidade cadastrada!',
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: '',
          message: 'Houve um erro no cadastro',
        };
      });
  }

  localizarID(ID: string): Promise<ENTIDADE> {
    return this.entidadeRepository.findOne({
      where: {
        ID,
      },
    });
  }

  async remover(id: string): Promise<RetornoObjDTO> {
    const entidade = await this.localizarID(id);

    return this.entidadeRepository
      .remove(entidade)
      .then((result) => {
        return <RetornoObjDTO>{
          return: entidade,
          message: 'Entidade excluida!',
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: entidade,
          message: 'Houve um erro ao excluir.' + error.message,
        };
      });
  }

  async alterar(
    id: string,
    dados: criaEntidadeDTO,
  ): Promise<RetornoCadastroDTO> {
    const entidade = await this.localizarID(id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      entidade[chave] = valor;
    });

    return this.entidadeRepository
      .save(entidade)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: entidade.ID,
          message: 'Entidade alterada!',
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: '',
          message: 'Houve um erro ao alterar.' + error.message,
        };
      });
  }
}
