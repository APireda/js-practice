const variables = ['a', 2, 10, '20', 'number']

variables.map((variable) => {
  if(typeof variable === 'number') {
    alert(`${variable} é um número`)
  } else {
    alert(`${variable} não é um número`)
  }
})