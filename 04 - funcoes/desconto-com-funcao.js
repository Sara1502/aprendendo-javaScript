function calcularDesconto(precoProduto, desconto) {
    return precoProduto - ((desconto / 100) * precoProduto);
}

function calcularJuros(precoProduto, juros) {
    return precoProduto + ((juros / 100) * precoProduto)
}

function calcularValorFinal(formadDePagamento, precoProduto) {
    if (formaDePagamento === 1) {
        console.log(calcularDesconto(precoProduto, 10))
    } else if (formaDePagamento === 2) {
        console.log(calcularDesconto(precoProduto, 15))
    } else if (formaDePagamento === 3) {
        console.log(precoProduto)
    } else {
        console.log(calcularJuros(precoProduto, 10))
    }
}


const precoProduto = 100;
const formaDePagamento = 4;

calcularValorFinal(formaDePagamento, precoProduto)
