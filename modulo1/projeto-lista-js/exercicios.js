// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  altura = prompt("Digite a altura: ")
  largura = prompt("Digite a largura: ")
  console.log((altura * largura))

}

// EXERCÍCIO 02
function imprimeIdade() {
 anoAtual = prompt("Digite o ano atual")
 anoNasc = prompt("Digite o seu ano de nascimento")
 console.log((anoAtual - anoNasc))

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return imc = peso / (altura * altura)
 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Digite seu nome: ")
  idade = prompt("Digite seu idade: ")
  email = prompt("Digite seu email: ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let arr = []
  cor1 = prompt("Digite uma cor")
  arr.push(cor1)
  cor2 = prompt("Digite uma cor")
  arr.push(cor2)
  cor3 = prompt("Digite uma cor")
  arr.push(cor3)
  
  console.log(arr)

}

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  str1 = "oi"
  str2 = "banana"
  return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  
  return custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  return array.reverse()

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  return string1.length === string2.length

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}