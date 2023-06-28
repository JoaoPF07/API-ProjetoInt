import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntidadeEntity } from './entidade/entidade.entity';

@Module({
  imports: [EntidadeEntity],
  controllers: [],
  providers: [],
})
export class AppModule {}
