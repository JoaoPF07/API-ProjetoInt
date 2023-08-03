import { DataSource } from 'typeorm';
import { EntidadeEntity } from './entidade.entity';

export const entidadeProviders = [
  {
    provide: 'ENTIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(EntidadeEntity),
    inject: ['DATA_SOURCE'],
  },
];