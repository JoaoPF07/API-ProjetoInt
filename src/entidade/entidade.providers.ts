import { DataSource } from 'typeorm';
import { ENTIDADE } from './entidade.entity';

export const entidadeProviders = [
  {
    provide: 'ENTIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ENTIDADE),
    inject: ['DATA_SOURCE'],
  },
];