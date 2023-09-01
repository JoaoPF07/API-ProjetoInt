import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'ns582.hostgator.com.br',
        port: 3306,
        username: 'vitali04_maossolidarias',
        password: 'joao91026469@',
        database: 'vitali04_maossolidarias',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];