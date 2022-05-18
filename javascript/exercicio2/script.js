/* 

Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: 

*/

let arr = [4, 5, 'ola']

function firstAndLast(arr) {
  let newArr = [arr.shift(), arr.pop()]
  return newArr
}
console.log(firstAndLast(arr))
