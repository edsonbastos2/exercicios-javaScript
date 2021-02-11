class validaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    // Para saber se é uma sequencia
    isSequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    // Cria os digitos finais apartir do metodo geraDigito
    // e gera um novo cpf
    geraCpfNovo() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = validaCpf.geraDigito(cpfSemDigito);
        const digito2 = validaCpf.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for (let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica)
            reverso--
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
        this.geraCpfNovo()

        return this.novoCpf === this.cpfLimpo;
    }
}


// const validarCpf = new validaCpf('011.723.453.25');
const validarCpf = new validaCpf('111.111.111.11');
if (validarCpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
