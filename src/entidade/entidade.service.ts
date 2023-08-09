import { Injectable, Inject } from '@nestjs/common';
import { RetornoCadastroDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import { criaEntidadeDTO } from './dto/entidade.dto';
import { ENTIDADE } from './entidade.entity';

@Injectable()
export class EntidadeService {
  constructor(
    @Inject('ENTIDADE_REPOSITORY')
    private entidadeRepository: Repository<ENTIDADE>,
  ) {}

  async listar(): Promise<ENTIDADE[]> {
    return this.entidadeRepository.find();
  }

  async inserir(dados:criaEntidadeDTO): Promise<RetornoCadastroDTO>{
    let Entidade = new ENTIDADE();
    Entidade.ID = uuid ();
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

    return this.entidadeRepository.save(ENTIDADE)
    .then((result) => {
      return <RetornoCadastroDTO> {
        id: this.entidadeRepository.id,
        message: "Entidade cadastrada!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO> {
        id: "",
        message: "Houve um erro no cadastro"
      }
    })

  }

  localizarID(ID: string): Promise<ENTIDADE> {
    return this.entidadeRepository.findOne({
      where: {
        ID,
      },
    });
  }

  async remover(id: string): Promise<void> {
    const user = await this.localizarID(id);
    await this.entidadeRepository.remove(user);
  };

};

function uuid(): any {
  throw new Error('Function not implemented.');
}
