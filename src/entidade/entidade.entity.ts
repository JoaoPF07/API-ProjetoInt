export class EntidadeEntity {
  ID: string;
  email: string;
  #senha: string;
  nome: string;
  telefone: string;
  cnpj: string;
  endereco: string;
  complemento: string;
  cidade: string;
  estado: string;
  cep: string;

  constructor(
    ID: string,
    email: string,
    senha: string,
    nome: string,
    telefone: string,
    cnpj: string,
    endereco: string,
    complemento: string,
    cidade: string,
    estado: string,
    cep: string,
  ) {
    this.ID = ID;
    this.email = email;
    this.#senha = senha;
    this.nome = nome;
    this.telefone = telefone;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.complemento = complemento;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  get senha() {
    return '********';
  }

  set senha(senhaNova) {
    this.#senha = senhaNova;
  }
}
