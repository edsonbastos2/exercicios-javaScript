const _estoque = Symbol();

class Estoque {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this[_estoque] = 0;
    }

    get estoque() {
        return this[_estoque];
    }

    saida() {
        if (this[_estoque] <= 0) {
            console.log(`Seu estoque esta zerado ${this[_estoque]}`)
            return;
        }
        this[_estoque]--;
    }

    entrada() {
        this[_estoque]++
    }

}

const p1 = new Estoque('Caneta', 'BIC');
p1.entrada();
p1.saida()
p1.saida()
console.log(p1)
console.log(p1.estoque)