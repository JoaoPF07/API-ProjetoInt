import { Injectable } from '@nestjs/common';
import { EntidadeEntity } from './entidade.entity';

@Injectable()
export class EntidadesAmazenadas {
  #entidades: EntidadeEntity[] = [];
  AdicionarEntidade(entidade: EntidadeEntity) {
    this.#entidades.push(entidade);
  }
  get Entidades() {
    return this.#entidades;
  }

  async validaEmail(email: string) {
    const possivelEntidade = this.#entidades.find(
      (entidade) => entidade.email === email,
    );
    return possivelEntidade !== undefined;
  }
  private buscaPorID(id: string) {
    const possivelEntidade = this.#entidades.find(
      (entidadeSalva) => entidadeSalva.id === id,
    );
    if (!possivelEntidade) {
      throw new Error('Entidade não encontrada!!');
    }

    return possivelEntidade;
  }
  async atualizaEntidade(
    id: string,
    dadosAtualizacao: Partial<EntidadeEntity>,
  ) {
    const entidade = this.buscaPorID(id);
    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
    });
    return entidade;
  }

  async deleteEntidade(id: string) {
    const entidade = this.buscaPorID(id);
    this.#entidades = this.#entidades.filter(
      (entidadeSalva) => entidadeSalva.id !== id,
    );
    return entidade;
  }
}
