
const velocidade = Symbol();

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[velocidade] = 0;
    }

    get velocidade() {
        return this[velocidade]
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor >= 101 || valor <= 0) return
        this[velocidade] = valor
    }

    acelerar() {
        if (this[velocidade] >= 100) return
        this[velocidade] += 10
    }
}

const c1 = new Carro('Fusca')
c1.velocidade = 100
console.log(c1.velocidade)