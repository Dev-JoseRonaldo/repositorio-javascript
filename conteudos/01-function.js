// Diferenças entre arrow function e function normal:

// 1. this

// Function tem o seu proprio this
function myFunction() {
  this.name = 'Ronaldo'
}

// new = método construtor: Tranforma nossa função em um obejto , podendo assim atribuir propriedades usando o this
console.log(new myFunction()) // retorno: myFunction { name: 'Ronaldo' }

// Arrow Function tem o this no escopo onde foram criadas
const myArrowFunction = () => {
  // Arrow function não tem construtor , então nunca podemos chamar um metodo contrutor nelas ( new myArrowFunction)
  // o seu this vai ser atrelado no escopo onde ela se encontra, como myArrowFunction não está dentro de nada, o seu this será atrelado ao escopo global do node, no navegador seria atrelado ao objeto Window

  this.name = 'José Ronaldo'
}

myArrowFunction()
console.log(this) // retorno: { name: 'José Ronaldo' }

// exemplo de arrow function atrelando seu this a outra funcção:

function myFunction2() {
  this.name = 'Alexandre'

  const myArrowFunction2 = () => {
    this.lastName = 'Cabral'
  }

  myArrowFunction2()
}

console.log(new myFunction2()) // retorno: myFunction2 { name: 'Alexandre', lastName: 'Cabral' }

// 2. arguments e Rest operator

function soma(...argumentos) {
  // por arguments
  console.log(Object.values(arguments)) // retorno = [ 1, 2, 3, 4, 5 ]

  //por rest
  console.log(argumentos) // retorno = [ 1, 2, 3, 4, 5 ]
}
soma(1, 2, 3, 4, 5)

//outro exemplo com rest Operator, serando um paramentro do rest
function soma2(primeiroParametro, ...argumentos) {
  console.log(primeiroParametro) // retorno = Ronaldo
  console.log(argumentos) // retorno = [ 1, 2, 3, 4, 5 ]
}
soma2('Ronaldo', 1, 2, 3, 4, 5)

// agora que ja sabemos a diferença do rest operator e do argumentos podemos falar da segunda diferença entre functions e arrow functions:
// Arrrow functions só aceitam a forma com rest operator, se usarmos o arguments nas arrow functions ela vai herdar o arguments de onde ela foi criada, funcionando igual ao this como verificamos anteriormente

//resumidamente, functions tem seu próprio this e seu proprio arguments, enquanto as arrow functions herdam o this e o arguments do escopo onde elas foram criadas.

// Parametros defaults em funções

// modo antigo de passar um parametro default para uma função
function modoAntigo(message) {
  console.log(message ? message : 'Mensagem padrão')
}

modoAntigo('Mensagem válida') // retorno = Mensagem válida
modoAntigo() // retorno = Mensagem Mensagem padrão

// modo atual de passar um parametro default para uma função
function modoAtual(message = 'Mensagem padrão') {
  console.log(message)
}

modoAtual('Mensagem válida') // retorno = Mensagem válida
modoAtual() // retorno = Mensagem Mensagem padrão
