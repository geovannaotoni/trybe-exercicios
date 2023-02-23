const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProperty = (object, key, value) => {
  object[key] = value;
};
addProperty(lesson2, 'turno', 'noite');
// console.log(lesson2);

const listKeys = (object) => {
  console.log(Object.keys(object));
};
// listKeys(lesson3);

const objLength = (object) => {
  return Object.keys(object).length;
};
// console.log(objLength(lesson1));

const listValues = (object) => {
  console.log(Object.values(object));
};
listValues(lesson3);

// Objeto de nome allLessons que agrupe todas as aulas
const allLessons = Object.assign({}, {lesson1: lesson1, lesson2: lesson2, lesson3: lesson3});
console.log(allLessons);
// console.log(Object.keys(allLessons));
// console.log(allLessons['lesson1']['numeroEstudantes'])

const getStudentsNumber = (objectComplete) => {
  const keysArray = Object.keys(objectComplete); // [ 'lesson1', 'lesson2', 'lesson3' ]
  let sum = 0;
  for (let key of keysArray) {
    // console.log(objectComplete[key]['numeroEstudantes'])
    sum += objectComplete[key]['numeroEstudantes'];
  }
  console.log(sum);
};
getStudentsNumber(allLessons);

// função para obter o valor da chave de acordo com a sua posição no objeto
const getValueByNumber = (object, position) => {
  const keysArray = Object.keys(object);
  return object[keysArray[position]];
  // Outra solução
  // return Object.values(obj)[number]
}
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'


// função que verifica se o par (chave / valor) existe no objeto
const verifyPair = (object, key, value) => {
  return object[key] === value;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Gabarito
// const verifyPair = (obj, key, value) => {
//   const entries = Object.entries(obj);
//   let isEqual = false;
//   for (let index in entries) {
//     if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// };
// console.log(verifyPair(lesson2,'professor','Carlos'));

// Bônus - Organizando lições
// função para contar quantos estudantes assistiram a uma determinada aula
const countStudentsInClass = (obj, lesson) => {
  const keysArray = Object.keys(obj);
  let estudantes = 0;
  for (let key of keysArray) {
    if (obj[key]['materia'] === lesson) {
      // console.log(obj[key]['numeroEstudantes'])
      estudantes += obj[key]['numeroEstudantes'];
    }
  }
  return estudantes;
};
console.log(countStudentsInClass(allLessons, 'Matemática')); //30

// função que retorne um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

// função para retornar as materias ministradas por um prof
const getLesson = (obj, teacher) => {
  const keysArray = Object.keys(obj);
  let materias = [];
  for (let key of keysArray) {
    if (obj[key]['professor'] === teacher) {
      materias.push(obj[key]['materia'])
    }
  }
  return materias;
};
console.log(getLesson(allLessons, 'Maria Clara'))

const createreport = (obj, teacher) => {
  const materias = getLesson(obj, teacher);
  let estudantes = 0;
  for (let materia of materias) {
    estudantes += countStudentsInClass(obj, materia);
  }
  const report = {
    professor: teacher,
    aulas: materias,
    estudantes: estudantes,
  }
  return report;
};
console.log(createreport(allLessons, 'Maria Clara'));

// Gabarito
const getInfo = (obj, teacher) => {
  const allLessons = [];
  let allStudent = 0;
  const values = Object.values(obj);
  for (let object of values) {
    if (object['professor'] === teacher) {
      allLessons.push(object['materia'])
      allStudent += object['numeroEstudantes'];
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, teacher) => {
  const report = {};
  report['professor'] = teacher;
  Object.assign(report, getInfo(allLessons, teacher));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));