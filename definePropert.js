function Pessoa(nome, sexo, idade) {
    this.nome = nome;
    this.sexo = sexo;

    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: false,
        get: () => {
            return idade
        },
        set: (valor) => {
            if (typeof valor !== 'number') {
                throw new TypeError('idade só aceita número')
            }

            idade = valor
        }
    })
}

const p1 = new Pessoa('Edson Bastos', 'M', 34);
const isTrue = Object.getOwnPropertyDescriptor(p1, 'idade');
console.log(isTrue)
if (isTrue.idade) {
    console.log('A idade esta configurada como true')
} else {
    console.log('A idade esta configurada como false')
}
p1.idade = 45;
console.log(p1.idade)