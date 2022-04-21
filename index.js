import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Analu", 888811122233);

cliente1.conta.agencia = 1001;
cliente1.conta.depositar(500);
cliente1.conta.sacar(400);

const cliente2 = new Cliente("Maria Flor", 888811122234);

cliente2.conta.agencia = 1001;
cliente2.conta.depositar(1000);
cliente2.conta.sacar(400);

cliente1.conta.transferir(100, cliente2);

console.log(cliente1);
console.log(cliente2);

