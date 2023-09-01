import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ENTIDADE {
  @PrimaryColumn()
  ID: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cnpj: string;
  
  @Column()
  endereco: string;

  @Column()
  complemento: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;
}
