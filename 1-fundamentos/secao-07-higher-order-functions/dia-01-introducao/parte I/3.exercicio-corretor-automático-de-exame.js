const corretor = (solution, answers, func) => {
  let total = 0;
  for (let index = 0; index < solution.length; index += 1) {
    total += func(solution[index], answers[index]);
  }
  return total;
};

const checker = (stringOne, stringTwo) => {
  if (stringOne === stringTwo) {
    return 1;
  } else if (stringTwo === 'N.A') {
    return 0;
  } else if (stringOne !== stringTwo) {
    return -0.5;
  }
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));

// Gabarito
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));