const number = Number(prompt('Digite um número'))
const even = number % 2 === 0

if(even) {
  alert(`${number} é um número par`)
} else {
  alert(`${number} é um número ímpar`)
}