import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EntidadeEntity } from './entidade.entity';

@Injectable()
export class EntidadeService {
  constructor(
    @Inject('MARCA_REPOSITORY')
    private entidadeRepository: Repository<EntidadeEntity>,
  ) {}

  async listar(): Promise<EntidadeEntity[]> {
    return this.entidadeRepository.find();
  }

  async inserir(): Promise<void>{
    
  }

  localizarID(ID: string): Promise<EntidadeEntity> {
    return this.entidadeRepository.findOne({
      where: {
        ID,
      },
    });
  }

  async remover(id: string): Promise<void> {
    const user = await this.localizarID(id);
    await this.entidadeRepository.remove(user);
  }
}