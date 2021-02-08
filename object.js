const produto = { nome: 'Camisa', preco: 29.78, desconto: 0.10 }

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

const nomeIsTrue = Object.getOwnPropertyDescriptor(produto, 'nome');

Object.defineProperty(produto, 'nome', {
    writable: true,
    configurable: false
})

if (nomeIsTrue.writable) {
    produto.nome = 'Sapato';
}


console.log(produto)