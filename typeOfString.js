const variables = ['a', 2, 10, '20', 'number']

variables.map((variable) => {
  if(typeof variable === 'string') {
    alert(`${variable} é uma string`)
  } else {
    alert(`${variable} não é uma string`)
  }
})