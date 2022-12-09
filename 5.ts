// Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.

console.log(QuebrarBarra(5, 3))

function QuebrarBarra(x: number, y: number): number{
    if(x == 0 || y == 0){
        return -1
    }

    let resultado: number = (x * y) - 1
    return resultado

}