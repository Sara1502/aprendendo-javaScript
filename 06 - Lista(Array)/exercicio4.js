/* 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50; */

const numerosPares = [];

for (i = 10; i <= 50; i++) {
    let numero = i;
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    };
}

console.log(numerosPares);