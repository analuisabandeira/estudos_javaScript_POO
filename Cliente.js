import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente {
    nome;
    _cpf;
    conta = new ContaCorrente();    

    get cpf() {

        return this._cpf;
    }

    constructor(nome, cpf) {

        this.nome = nome;
        this._cpf = cpf;
    }
}


// set cliente() {

//     if(novoCliente instanceof Cliente) { ==> Certifica se o novoCliente é uma instância da class Cliente
//         this._cliente = novoCliente;
//     }
// }