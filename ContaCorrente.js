export class ContaCorrente {
    
    agencia;
    _saldo = 0; // Atributo privado!! Também pode ser representado como ==> #saldo;

    get saldo() {

        return this._saldo;
    }

    sacar(valor) {

        if(this._saldo >= valor) {

            this._saldo -= valor; 
            return valor;
        }        
    }

    depositar(valor) {

        if(valor <= 0) { // Early return: verifica primeiramente a condição que não esperamos, para parar o bloco o quanto antes (caso necessário!)
            return;
        }

        this._saldo += valor; 
    }
 
    transferir(valor, cliente) {

        const valorTransferencia = this.sacar(valor);
        cliente.conta.depositar(valorTransferencia);
    }
} 