import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EntidadeController } from './entidade.controller';
import { EntidadesAmazenadas } from './entidade.dm';
import { entidadeProviders } from './entidade.providers';
import { EntidadeService } from './entidade.service';
import { EmailUnicoValidator } from './validacao/email-unico.validator';

@Module({
  imports: [DatabaseModule],
  controllers: [EntidadeController],
  providers: [
    EntidadesAmazenadas,
    EmailUnicoValidator,
    ...entidadeProviders,
    EntidadeService,
  ],
})
export class EntidadeModule {}
