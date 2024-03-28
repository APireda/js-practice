candidatesList = [
  {
    name: 'João',
    firstGrade: 6,
    secondGrade: 6,
  },

  {
    name: 'Letícia',
    firstGrade: 9,
    secondGrade: 10,
  },

  {
    name: 'Diego',
    firstGrade: 9,
    secondGrade: 9,
  },

  {
    name: 'Julia',
    firstGrade: 6,
    secondGrade: 5,
  },

  {
    name: 'Alex',
    firstGrade: 6,
    secondGrade: 8,
  },
]

const gradeAverageCalc = (firstGrade, secondGrade) => {
  const gradeAverage = (firstGrade + secondGrade) / 2
  return gradeAverage
}

candidatesList.map((candidate) => {
  const gradeAverage = gradeAverageCalc(candidate.firstGrade, candidate
    .secondGrade) 

  if(gradeAverage >= 7) {
    return alert(`A média do(a) aluno(a) ${candidate.name} é: ${gradeAverageCalc(candidate.firstGrade, candidate.secondGrade)} \n Parabéns ${candidate.name}! Você foi aprovado(a) no concurso!`)
  } else {
    return alert(`A média do(a) aluno(a) ${candidate.name} é: ${gradeAverageCalc(candidate.firstGrade, candidate.secondGrade)} \n Não foi dessa vez ${candidate.name}! Tente novamente!`)
  }
})
