export class Usuario{
    readonly name;
    readonly pass;

    constructor({nome, senha}:{
        nome: string, senha: string
    }){
        this.name = nome;
        this.pass = senha;
    }
}