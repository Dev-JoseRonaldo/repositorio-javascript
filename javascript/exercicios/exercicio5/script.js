/* 

Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.


*/

let arr1 = [5, 1, 2, 8, 15, 12, 14]

function receberSomenteOsParesDeIndicesPares(arr) {
  return arr.filter((numero, indice) => {
    if (numero % 2 === 0 && indice % 2 === 0) {
      return numero
    }
  })
}

console.log(receberSomenteOsParesDeIndicesPares(arr1))
