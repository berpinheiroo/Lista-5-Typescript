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
// console.log(TransformarPalavra("coDIGo"))
// function TransformarPalavra(palavra: string):string {
//     let maiusculas : RegExp = /[A-Z]/g
//     let minusculas : RegExp = /[a-z]/g
//     let contadorMa: string[] | null = palavra.match(maiusculas)
//     let contadorMi: string[] | null = palavra.match(minusculas)
//     console.log(contadorMa)
//     console.log(contadorMi)
//     if(contadorMa.length > contadorMi.length){
//         return palavra.toUpperCase()
//     }
//     else{
//         return palavra.toLowerCase()
//     }
// }
// Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
// Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
// primeiro vence, um jogador é derrubado quando sua vida for <= 0.
// Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
// seguintes propriedades: Nome: string, Vida: number, Ataque: number.
// Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
// dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
// começar atacando.
// DeclararVencedor(new Lutador(“Fulano”, 10, 2), new Lutador (“Ciclano”, 7, 3),
// “Ciclano)
// Cliclano ataca Fulano; Fulano agora tem 7 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 5 de vida.
// Cliclano ataca Fulano; Fulano agora tem 4 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 3 de vida.
// Cliclano ataca Fulano; Fulano agora tem 1 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 1 de vida.
// Cliclano ataca Fulano; Fulano agora tem -2 de vida e caiu. Ciclano ganhou!
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
    return Lutador;
}());
var primeiroLutador = new Lutador("Bernardo", 10, 2);
var segundoLutador = new Lutador("Tite", 10, 1);
NomeDoVencedor(primeiroLutador, segundoLutador, "Tite");
function NomeDoVencedor(primeiroLutador, segundoLutador, primeiroAtacar) {
    var continuar = true;
    var lutadores = [];
    if (primeiroLutador.Nome == primeiroAtacar) {
        lutadores.push(primeiroLutador, segundoLutador);
    }
    else {
        lutadores.push(segundoLutador, primeiroLutador);
    }
    do {
        lutadores[1].Vida = lutadores[1].Vida - lutadores[0].Ataque;
        console.log(lutadores[1].Nome, "ataca", lutadores[0].Nome, ";", lutadores[0].Nome, "agora tem", lutadores[0].Vida, "de vida.");
        if (lutadores[1].Vida <= 0) {
            continuar = false;
            console.log("O lutador ".concat(lutadores[1].Nome, " ficou com ").concat(lutadores[1].Vida, " de vida"));
            console.log("O vencedor da luta e: ", lutadores[0].Nome);
        }
        else {
            lutadores.reverse();
        }
    } while (continuar);
}
