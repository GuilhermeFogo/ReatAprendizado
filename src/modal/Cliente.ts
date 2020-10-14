import { Endereco } from './Endereco';
export class Cliente{
    readonly id: string;
    readonly nome: string;
    readonly telefone: string; 
    readonly email: string;
    readonly Endereco: Endereco;

    constructor({id, nome, telefone, email, idEndereco, cep, rua, numero, complemento}:{
        id: string, nome:string, telefone:string, email: string, idEndereco: string,
        cep: string, rua: string, numero: string, complemento: string
    }){
        this.email = email;
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.Endereco = new Endereco({
            id: idEndereco,
            rua: rua,
            cep: cep,
            numero: numero,
            complemento: complemento
        })
    }
}