// a. undefined
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9

//SUBI NUM ÔNIBUS EM MIRROCOS, 27


//--------------------------------------------------

let nome = prompt("Digite o seu nome: ")
let email = prompt("Digite o seu email: ")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//

let comidas = ['churrasco', 'hamburguer', 'pizza', 'strognoff', 'lasanha']
console.log(comidas)
console.log("Essas são minhas comidas preferidas")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
let comidaUsuario = prompt("Digite a sua comida preferida: ")
comidas[1] = comidaUsuario
console.log(comidas)

//

let listaDeTarefas = []
var1 = prompt("Digite a primeira tarefa")
var2 = prompt("Digite a segunda tarefa")
var3 = prompt("Digite a terceira tarefa")
listaDeTarefas.push(var1, var2, var3)
console.log(listaDeTarefas)
indice = prompt("Digite um indice: ")
listaDeTarefas.splice(indice)