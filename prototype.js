

function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    let descontoLocal = desconto

    Object.defineProperty(this, 'descontoLocal', {
        value: descontoLocal,
        writable: false,
        configurable: false
    })
}


Produto.prototype.calculodesconto = function () {
    let result = this.preco - (this.preco * this.descontoLocal);
    return result;
}

const p1 = new Produto('Blusa', 60.00, 0.10);
p1.descontoLocal = 0.6;
delete p1.descontoLocal;
console.log(p1.preco)
console.log(p1.descontoLocal)
console.log(p1.calculodesconto())
