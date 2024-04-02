const variables = [false, true, 0, {}, -0, [], "", 1, null, 3.23, undefined, "0", NaN, "false", -1, Infinity, -Infinity]

variables.map((variable) => {
  if(variable) {
    alert(`${variable} é truthy`)
  } else {
    alert(`${variable} é falsy`)
  }
})