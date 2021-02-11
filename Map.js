const pessoas = [
    { id: 3, nome: 'Luiza' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
]

const novasPessoas = new Map()

for (let pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))