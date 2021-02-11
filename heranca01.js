const velocidade = Symbol();

class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
        this[velocidade] = 0;
    }

    get velocidade() {
        return this[velocidade]
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor > 100) return;
        this[velocidade] = valor;
    }

    acelera() {
        if (this[velocidade] >= 100) return;
        this[velocidade]++
    }

    freiar() {
        if (this[velocidade] < 0) return;
        this[velocidade]--;
    }
}

class Carro extends Veiculo {
    constructor(tipo, modelo) {
        super(tipo);
        this.modelo = modelo;
    }

    // set velocidade(valor) {
    //     if (typeof valor !== 'number') return;
    //     if (valor > 200) return;
    //     this[velocidae] = valor;
    // }
}

const c1 = new Carro('Carro', 'Passeio')
c1.velocidade = 120;
console.log(c1)
console.log(c1.velocidade)