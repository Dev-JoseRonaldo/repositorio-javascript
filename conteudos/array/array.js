//  -----------------------------MÉTODOS-DE-ARRAYS----------------------------------

//PROPRIEDADES E MÉTODOS DO PROTOTYPE

// [].length retorna o tamanho da array

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]

console.log(frutas.length) // 3
console.log(frutas[0].length) // 6
console.log(frutas[1].length) // 4
console.log(frutas[2].length) // 2

/* --------------- Métodos Modicadores --------------
  Os próximos métodos que vamos falar sobre, são métodos
  modicadores (mutator methods). Além de retornarem um valor,
  eles modicam a array original. */

// 1. [].sort() :
// organiza a pelo unicode.

const instrumentos = ['Guitarra', 'Baixo', 'Violão']

instrumentos.sort()
console.log(instrumentos) // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8]
idades.sort()
console.log(idades) // [1, 12, 21, 32, 33, 43, 8]

/* 2. [].unshift() e [].push():
   [].unshift() adiciona elementos ao início da array e retorna o length da mesma. 
   [].push() adiciona elementos ao final da array e retorna o length da mesma.*/

const carros = ['Ford', 'Fiat', 'VW']

carros.unshift('Honda', 'Kia') // 5
console.log(carros) // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari') // 6
console.log(carros) // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

/* 3. [].shift() e [].pop()
  [].shift() remove o primeiro elemento da array e retorna o mesmo.
  [].pop() remove o último elemento da array e retorna o mesmo. */

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda']

const primeiroCarro = carros2.shift() // 'Ford'
console.log(carros2) // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros2.pop() // 'Honda'
console.log(carros2) // ['Fiat', 'VW'];

/* 4. [].reverse()
   inverte os itens da array e retorna a nova array. */

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda']
console.log(carros3.reverse()) // ['Honda', 'VW', 'Fiat', 'Ford'];

/* 5. [].splice(index, remover, item1, item2, ...) 
   adiciona valores na array a partir do index. Remove a quantidade de itens
   que for passada no segundo parâmetro (retorna esses itens). */

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda']

carros4.splice(1, 0, 'Kia', 'Mustang') // []
console.log(carros4) // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros4.splice(3, 2, 'Ferrari') // ['Fiat', 'VW']
console.log(carros4) // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

/* 6. [].copyWithin(alvo, inicio, final)
   a partir do alvo, ele irá copiar a array começando do inicio até o final e
   vai preencher a mesma com essa cópia. Caso omita os valores de início e
   final, ele irá utilizar como inicio o 0 e final o valor total da array. */

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3))
// ['Item1', 'Item2', 'Item1', 'Item2']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1))
// ['Item1', 'Item2', 'Item3', 'Item1']

/* 7. [].fill(valor, inicio, final)
   preenche a array com o valor, do início até o fim. */

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'))
// ['Banana', 'Banana', 'Banana', 'Banana']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2))
// ['Item1', 'Item2', 'Banana', 'Banana']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3))
// ['Item1', 'Banana', 'Banana', 'Item4']
