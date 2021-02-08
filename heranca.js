function Produto(nome, tipo, preco, estoque) {
    this.nome = nome;
    this.tipo = tipo;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        writable: true,
        value: 0,
        enumerable: true,
        configurable: false,
    })
}

Produto.prototype.entrada = function () {
    this.estoque++;
}
Produto.prototype.saida = function () {
    this.estoque--
}

Produto.prototype.totalValor = function () {
    return this.estoque * this.preco
}

function Caneta(nome, tipo, preco, estoque, cor) {
    Produto.call(this, nome, tipo, preco, estoque);
    this.cor = cor
}

Caneta.prototype = Object.create(Produto.prototype)
Caneta.prototype.constructor = Caneta;

const p1 = new Caneta('Caneta', 'BIC', 2.50, 10, 'preta');
const p2 = new Produto('Camiseta', 'Nik', 100, 10)
p1.entrada()
p1.entrada()
p1.entrada()
p1.entrada()
p1.saida(1)
console.log(p1)
console.log(p1.totalValor())
console.log(p2)
p2.entrada()
p2.entrada()
p2.entrada()
p2.entrada()
p2.saida()
console.log(p2.totalValor())