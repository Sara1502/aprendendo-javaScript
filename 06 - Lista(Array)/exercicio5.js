/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4] */


const medias = [2, 7, 3, 8, 10, 4];

for (i = 0; i < medias.length; i++) {
    let media = medias[i];
    if (media < 5) {
        i++
        console.log('Aluno: ' + i)
    }
}
