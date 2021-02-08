let empresa = {
    nome: 'Singular',
    cidade: 'Fortaleza',
    site: 'site01@legal.com'
}

let user = {
    nome: 'Edson',
    idade: 34,
    ...empresa
}

console.log(user)