/* 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V". */

const nomes = [];

nomes.push('Sara');
nomes.push('João');
nomes.push('Vitor');
nomes.push('Helena');
nomes.push('Vitoria');

for (i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    if (nome.startsWith('V')) {
        console.log(nome)
    }
}