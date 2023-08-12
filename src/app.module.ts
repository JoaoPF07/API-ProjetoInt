import { Module } from '@nestjs/common';
import { EntidadeModule } from './entidade/entidade.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EntidadeModule, AuthModule, UsersModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
