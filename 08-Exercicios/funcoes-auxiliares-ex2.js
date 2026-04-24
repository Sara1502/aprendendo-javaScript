/* 2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1 */

const numeros = [];
let numerosPares = [];
let numerosImpares = [];

numeros.push(5);
numeros.push(3);
numeros.push(4);
numeros.push(1);
numeros.push(10);
numeros.push(8);

function gets() {
    for (i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        if (numero % 2 === 0) {
            numerosPares.push(numero);
        } else {
            numerosImpares.push(numero)
        }
    }
    const maiorNumeroPar = Math.max(...numerosPares);
    const menorNumeroImpar = Math.min(...numerosImpares);
    return ('Maior número par: ' + maiorNumeroPar + ' Menor número impar: ' + menorNumeroImpar)
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }
