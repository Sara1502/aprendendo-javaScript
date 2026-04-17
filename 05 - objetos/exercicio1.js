/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    };
};

function calcularValorGasto(distancia, valorCombustivel, gastoPorKm) {
    return ((distancia * valorCombustivel) / gastoPorKm)
}

const uno = new carro('fiat', 'vermelho', 10)
const kicks = new carro('nissan', 'cinza', 18)
const distancia = 100
const valorCombustivel = 5.79

console.log(calcularValorGasto(distancia, valorCombustivel, uno.gastoPorKm).toFixed(2))
console.log(calcularValorGasto(distancia, valorCombustivel, kicks.gastoPorKm).toFixed(2))