import { Module } from '@nestjs/common';
import { EntidadeModule } from './entidade/entidade.module';

@Module({
  imports: [EntidadeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
