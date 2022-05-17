//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"


// nome: "Juca", 	
// idade: 3, 	
// raca: "SRD"
//
// nome: "Juba", 	
// idade: 3, 	
// raca: "SRD"
//
// nome: "Jubo", 	
// idade: 3, 	
// raca: "SRD"
//
//A sintaxe dos 3 pontos permite incorporar todos os elementos e propriedades do OBJ


//false e indefined
// a primeira propriedade "backender" existe no objeto pessoa, a propriedade altura não


//////////////////////////////////////////////////////////////////////////////////////////


const obj1 = {
    nome: "Ciro",
    apelidos: ["ap1", "ap2", "ap3"]
}

fnct = (obj) => {
    console.log(`Eu sou ${obj.nome}, mas pode me chamar de: 
    ${obj.apelidos[0]}, ${obj.apelidos[1]}, ${obj.apelidos[2]}`)
}

fnct(obj1)

const obj2 = {
    ...obj1,
    apelidos: ["ap4", "ap5", "ap6"]
}

fnct(obj2)

/////////////////

const obj3 = {
    nome: "Ciro",
    idade: 26,
    profissao: "Programador",
    
}

fnct2 = (obj) => {
    console.log(`${obj.nome}, ${obj.profissaoCaracteres}, ${obj.idade}, ${obj.profissao}`)
}

fnct2(obj3)


////////////////


let carrinho = []

const maça = {
    nome: "String",
    disponibilidade: true
}

const abacaxi = {
    nome: "String",
    disponibilidade: true
}

const uva = {
    nome: "String",
    disponibilidade: true
}

fnct3 = (obj) => {
    carrinho.push(obj)
}

fnct3(maça)
fnct3(abacaxi)
fnct3(uva)

console.log(carrinho);