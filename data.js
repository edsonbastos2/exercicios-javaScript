function formatarNUmero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatarData(data) {
    const dia = formatarNUmero(data.getDate());
    const mes = formatarNUmero(data.getMonth() + 1);
    const ano = formatarNUmero(data.getFullYear());
    const hora = formatarNUmero(data.getHours());
    const minuto = formatarNUmero(data.getMinutes());
    const seg = formatarNUmero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${seg}`;
}

let data = new Date();
let dataBrasil = formatarData(data)
console.log(dataBrasil)

