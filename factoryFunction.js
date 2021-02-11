
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} está Comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber)


function pessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = pessoa('Edson', 'Bastos')
p1.falar()
p1.comer()
p1.beber()