let edson = {
    nome: 'Edson',
    empresa: 'Singular'
}
let david = {
    nome: 'David',
    empresa: 'Sol'
}
let erik = {
    nome: 'Erik',
    empresa: 'Umbler'
}

let users = [edson, david, erik];

let finduser = users.find(user => user.nome === 'Edson');
console.log(finduser)