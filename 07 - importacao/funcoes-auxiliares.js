/* 1) Uma sala contem 5 alunos e pra cada aluno foi sorteado um numero de 1 = 100. Faça um prograrma que receba os 
5 numeros sorteados para os alunos e mostre o maior numero sorteado.
  Dados de entrada: 5, 50, 10, 98, 23  Saida: 98 */

function gets() {
    numeros = [5, 50, 10, 98, 23];
    maiorNumero = Math.max(...numeros);
    return maiorNumero
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print }
