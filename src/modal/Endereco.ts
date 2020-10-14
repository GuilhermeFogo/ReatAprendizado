export class Endereco {
    readonly rua: string;
    readonly id: string;
    readonly cep: string;
    readonly numero: string;
    readonly complemento: string;

    constructor({id,rua, cep, numero,complemento}:
        { id: string, rua:string, cep: string, numero: string, complemento: string}){
        this.cep = cep;
        this.complemento = complemento;
        this.id = id;
        this.numero = numero;
        this.rua = rua;
    }

}