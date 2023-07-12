

export class listaEntidadeDTO {
    constructor (
        readonly nome: string,
        readonly cidade: string,
        readonly estado: string,
        readonly cep: string,
        readonly telefone: string,
        readonly endereco: string,
    ) {}
}