function romanosToInt(romano) {
    let n = 0;

    const numeros = {
        'i': 1,
        'v': 5,
        'x': 10,
        'l': 50,
        'c': 100,
        'd': 500,
        'm': 1000
    }

    for (let i = 0; i < romano.length; i++) {
        let prox = romano[i + 1]
        let atual = romano[i]


        if (prox && numeros[prox] > numeros[atual]) {
            n -= numeros[atual]
        } else {
            n += numeros[atual]
        }
    }


    console.log(n)
}

romanosToInt('x')