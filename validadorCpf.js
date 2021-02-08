const cpf = '011-723-453-25'
const cpfLimpo = cpf.replace(/\D+/g, '');

console.log(cpfLimpo.slice(0, -2))