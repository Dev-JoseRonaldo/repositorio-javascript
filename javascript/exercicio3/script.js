/* 

Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro. 

*/

let array = ['Javascript', 1, '3', 'Web', 20]

function onlyNumnbers(arr) {
  return arr.filter(item => typeof item === 'number')
}

console.log(onlyNumnbers(array))
