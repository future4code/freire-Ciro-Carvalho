//1
//console.log("a. ", resultado) = false
//console.log("b. ", resultado) = false
//console.log("c. ", resultado) = true
//console.log("d. ", resultado) = boolean

//----------

//2
//o código está concatenando os dois números ao invés de somar

//3
//basta adicionar parseInt
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = parseInt(primeiroNumero) + parseInt(segundoNumero)
// console.log(soma)

//------------------------------------------------------------------------------------------------

//1
let idade1 = prompt("Digite a sua idade: ")
let idadeAmigo = prompt("Digite a idade do seu amigo: ")
console.log("Sua idade é maior que a do seu amigo?", (idade1 > idadeAmigo))
console.log("Diferença: ", (idade1 - idadeAmigo))

//----------
//2
let num1 = prompt("Digite um numero par: ")
console.log(num1 % 2)
//numero par o resto da divisão é 0
//número ímpar o resto da divisão é 1

//3
let idadeUsuario = prompt("Digite a sua idade: ")
console.log("Sua idade em meses: ", (idadeUsuario * 12))
console.log("Sua idade em semanas: ", (idadeUsuario * 56))
console.log("Sua idade em dias: ", (idadeUsuario * 365))

//4
let a1 = prompt("Digite o primeiro numero: ")
let a2 = prompt("Digite o segundo numero: ")

console.log("O primeiro numero é maior que o segundo? ", (a1 > a2))
console.log("O primeiro numero é igual que o segundo? ", (a1 = a2))
console.log("O primeiro numero é divisível pelo segundo? ", (a1 % a2 == 0))
console.log("O segundo numero é divisível pelo primeiro? ", (a2 % a1 == 0))