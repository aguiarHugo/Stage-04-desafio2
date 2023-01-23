let students = [
    { name: "Hugo", n1: 4, n2: 10 },
    { name: "Larissa", n1: 6, n2: 7 },
    { name: "João", n1: 9, n2: 6 },
    { name: "Zezinho", n1: 3, n2: 3 },
    { name: "Luizinho", n1: 4, n2: 4 }
  ]

  const calcMedia = (n1, n2) => {
    return ((n1 + n2) / 2).toFixed(1)
  }

for (let media of students) {

    if(calcMedia(media.n1, media.n2) >= 7) {
  
      alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.n1, media.n2)}
      Parabéns, ${media.name}! Você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.n1, media.n2)}
      Não foi dessa vez, ${media.name}! Tente novamente!`)
      }
  }