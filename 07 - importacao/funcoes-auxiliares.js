/* 1) Uma sala contem 5 alunos e pra cada aluno foi sorteado um numero de 1 = 100. Faça um prograrma que receba os 
5 numeros sorteados para os alunos e mostre o maior numero sorteado.
  Dados de entrada: 5, 50, 10, 98, 23  Saida: 98 

function gets() {
    numeros = [5, 50, 10, 98, 23];
    maiorNumero = Math.max(...numeros);
    return maiorNumero
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print } */

/* 2) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada: 2
        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20 

function gets() {
    const numero = 2
    let tabuada = []
    for (i = 1; i <= 10; i++) {
        resultado = numero * i;
        tabuada.push(resultado)
    }
    return tabuada
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print } */


/* 3) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4, 100, 150, 90, 200

    Saída:
        Maior número: 200
        Menor número: 90 

function gets() {
    numeros = [4, 100, 150, 90, 200];
    maiorNumero = Math.max(...numeros);
    menorNumero = Math.min(...numeros)
    return ('Maior numero: ' + maiorNumero + ' Menor numero: ' + menorNumero)
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print } */


/* 
4) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada: 5, 1, 3, 9, 10, 12
    Saída: Números Pares: 10, 12 */


const numeros = [5, 1, 3, 9, 10, 12]

let numerosPares = []

function gets() {
    for (i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        if (numero % 2 === 0) {
            numerosPares.push(numero)
        }
    }
    return ('Numeros pares: ' + numerosPares);
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }

