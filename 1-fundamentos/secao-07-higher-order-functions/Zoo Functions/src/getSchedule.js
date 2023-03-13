const data = require('../data/zoo_data');

const getFullSchedule = () => {
  const arrayHours = Object.entries(data.hours);
  const fullSchedule = arrayHours.reduce(((acc, curr) => {
    acc[curr[0]] = {
      officeHour: `Open from ${curr[1].open}am until ${curr[1].close}pm`,
      exhibition: data.species
        .filter(({ availability }) => availability
          .some((day) => day === curr[0]))
        .map(({ name }) => name),
    };
    if (curr[0] === 'Monday') {
      acc[curr[0]].officeHour = 'CLOSED';
      acc[curr[0]].exhibition = 'The zoo will be closed!';
    }
    return acc;
  }), {});
  return fullSchedule;
};

const getSchedule = (scheduleTarget) => {
  const fullSchedule = getFullSchedule();
  const newObj = {};
  if (data.species.some(({ name }) => name === scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).some((day) => day === scheduleTarget)) {
    newObj[scheduleTarget] = fullSchedule[scheduleTarget];
    return newObj;
  }
  return fullSchedule;
};

// Explicação para mim mesma:
// Função getFullSchedule:
// arrayHours: array de arrays, para cada array o index 0 corresponde ao dia e o index 1 o objeto com as chaves open e close.
// objectSchedule: objeto que contem como chaves os dias da semana e como valores objetos com as chaves officeHour e exhibition.
// Função getSchedule:
// Verifica se a string passada como parâmetro da função é uma espécie com a HOF some. Se for, a função encontra (com a HOF find) o objeto cuja chave name é igual à string passada como parâmetro e retorna o valor da chave availability (o array de dias).
// / Verifica se a string passada como parâmetro da função é um dia da semana com a HOF some. Se for, a função retorna um objeto cuja chave é o nome do dia procurado e o valor é um objeto com as chaves officeHour e exhibition (objeto esse que pode ser obtido pelo objeto principal fullSchedule).

module.exports = getSchedule;
