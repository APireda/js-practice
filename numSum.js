const firstNumber = Number(prompt('Digite o primeiro número:'))
const secondNumber = Number(prompt('Digite o segundo número:'))

const numberSum = firstNumber + secondNumber
const numberSub = firstNumber - secondNumber
const numberMult = firstNumber * secondNumber
const numberDiv = firstNumber / secondNumber
const numberDivRest = firstNumber % secondNumber

alert(`A soma dos dois números é: ${numberSum}`)
alert(`A subtração dos dois números é: ${numberSub}`)
alert(`A multiplicação dos dois números é: ${numberMult}`)
alert(`A divisão dos dois números é: ${numberDiv}`)
alert(`O resto da divisão dos dois números é: ${numberDivRest}`)

if(numberSum % 2 === 0) {
  alert(`A soma dos dois números é par`)
} else {
  alert(`A soma dos dois números é ímpar`)
}

if(firstNumber === secondNumber) {
  alert(`Os dois números inseridos são iguais`)
} else {
  alert(`Os dois números inseridos são diferentes`)
}