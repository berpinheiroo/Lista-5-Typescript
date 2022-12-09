// Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
// console.log(QuebrarBarra(5, 3))
// function QuebrarBarra(x: number, y: number): number{
//     if(x == 0 || y == 0){
//         return -1
//     }
//     let resultado: number = (x * y) - 1
//     return resultado
// }
// Faça uma função que receba uma string como parâmetro, essa string pode conter
// letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
// minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
// alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
// retornar apenas minúsculas.
console.log(TransformarPalavra("coDIGo"));
function TransformarPalavra(palavra) {
    var maiusculas = /[A-Z]/g;
    var minusculas = /[a-z]/g;
    var contadorMa = palavra.match(maiusculas);
    var contadorMi = palavra.match(minusculas);
    console.log(contadorMa);
    console.log(contadorMi);
    if (contadorMa.length > contadorMi.length) {
        return palavra.toUpperCase();
    }
    else {
        return palavra.toLowerCase();
    }
}
