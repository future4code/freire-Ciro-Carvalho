//Exercicio 1: 10
//Exercício 1: 10, 5

//Exercício 2: 10,10,10

//Exercício 3: 
//let horas = prompt("Quantas horas você trabalha por dia?")
//let diaria = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${diaria/horas} por hora`)

//---------------------------------------------------------------------------
//exercicio de escrita 1:
let nome;

let idade;

console.log(typeof nome);
console.log(typeof idade);

//foram impressos como indefinidos, pois o programa não sabe qual tipo de dado eu irei utilizar

nome = prompt("Digite o seu nome: ")
idade = prompt("Digite o seu nome: ")

console.log(nome)
console.log(idade)
//recebeu os valores passados através do prompt

console.log("Olá ", nome, ", você tem ", idade, " anos.")

//exercicio de escrita 2:

let a1 = "Você está usando azul hoje? "
let a2 = "Você dormiu bem hoje? "
let a3 = "Você foi trabalhar de carro hoje? "

let b1 = prompt(a1)
let b2 = prompt(a2)
let b3 = prompt(a3)

console.log(a1, " - ", b1)
console.log(a2, " - ", b2)
console.log(a3, " - ", b3)

//exercicio de escrita 3:

let a = 10
let b = 25
let c = a
let d = b

a = d
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)

////DESAFIO

let n1 = prompt("Digite o primeiro numero: ")
let n2 = prompt("Digite o segundo numero: ")

console.log(" O primeiro número somado ao segundo número resulta em: ", (n1 + n2))
console.log(" O segundo número multiplicado ao segundo número resulta em: ", (n1 * n2))




