//10
//50
//não apareceria nada no console

//eu gosto de cenoura cenoura
//cenoura é bom pra vista cenoura
//cenouras crescem na terra cenoura

////////////////////////////////////////

function funct1() {
    console.log("Eu sou Ciro, tenho 26 anos, moro no RJ e sou estudante.");
}
funct1()

// //

function funct2(nome, idade, endereco, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco}, e sou ${profissao}`)
}
let nome = prompt("Digite o seu nome: ")
let idade = prompt("Digite a sua idade: ")
let endereco = prompt("Digite a sua idade: ")
let profissao = prompt("Digite sua profissão: ")
funct2(nome, idade, endereco, profissao)
//

let n1 = Number (prompt("Digite o primeiro numero"))
let n2 = Number (prompt("Digite o segundo numero"))
function funct3(n1,n2) {
    return n1 + n2;
}
console.log(funct3(n1,n2))

//
function funct4(n2,n3) {
    console.log(n2 > n3)
}
funct4(3,5)
//
function funct4(n4) {
    console.log((n4 % 2 == 0))
}
//
//
let numero1 = Number(prompt("Digite o primeior numero: "))
let numero2 = Number(prompt("Digite o segundo numero: "))
operacao(numero1, numero2)
function operacao(n1,n2) {
    somar(n1,n2)
    subtrair(n1,n2)
    multiplicar(n1,n2)
    divisao(n1,n2)
}

function somar(n1,n2) {
    console.log((n1 + n2))
}

function subtrair(n1,n2) {
    console.log((n1 - n2))
}

function multiplicar(n1,n2) {
    console.log((n1 * n2))
}

function divisao(n1,n2) {
    console.log((n1 / n2))
}


