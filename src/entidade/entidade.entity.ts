
export class EntidadeEntity {
    id: string;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    #senha: string;

    constructor (
        id: string,
    nome: string,
    endereco: string,
    telefone: string,
    email: string,
    senha: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.#senha = senha;

    }

    get senha (){
        return '********'
    }

    set senha (senhaNova){
        this.#senha = senhaNova;
    }

}