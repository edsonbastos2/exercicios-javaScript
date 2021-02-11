function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.saque = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
}
Conta.prototype.deposito = function (valor) {
    this.saldo += valor
}
Conta.prototype.mostrarSaldo = function () {
    console.log(`Agencia: ${this.agencia} | Conta: ${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`)
}


function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.saque = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
}


const cc = new CC(012, 0001, 10, 100);
cc.saque(90)
cc.saque(30)
console.log(cc)