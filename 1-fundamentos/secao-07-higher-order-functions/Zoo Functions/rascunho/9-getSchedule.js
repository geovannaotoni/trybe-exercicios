const data = require('./data');

const getSchedule = (scheduleTarget) => {
  const arrayHours = Object.entries(data.hours); // array de arrays, e para cada array o index 0 corresponde ao dia e o index 1 o objeto com as chaves open e close
  const objectSchedule = arrayHours.reduce(((acc, curr) => {
    acc[curr[0]] = {
      officeHour: `Opens from ${curr[1].open}am until ${curr[1].close}pm`,
      exhibition: data.species
        .filter(({availability}) => availability
        .some((day) => day === curr[0]))
        .map(({name}) => name),
    };
    if (curr[0] === 'Monday') {
      acc[curr[0]].officeHour = 'CLOSED';
    }
    return acc;
  }), {});
  // return objectSchedule;
  if (data.species.some(({name}) => name === scheduleTarget)) {
    return data.species.find(({name}) => name === scheduleTarget).availability;
  };
  if (Object.keys(data.hours).some((day) => day === scheduleTarget)) {
    return objectSchedule[scheduleTarget];
  }
  if (!scheduleTarget || !Object.keys(data.hours).some((day) => day === scheduleTarget) || data.species.some(({name}) => name === scheduleTarget)) {
    return objectSchedule;
  };
}

// Explicação para mim mesma: A função pode receber três tipos de parâmetros: nada, uma espécie ou um dia. 
// Se não receber nada, a função retorna um objeto cujas chaves são cada dia da semana e os valores são outros objetos com as chaves officeHour e exhibition. Para a chave officeHour, o valor é uma string com os horários de abertura e fechamento de cada dia (obtido a partir do objeto hours). Para a chave exhibition, o valor é um array com as espécies exibidas naquele dia; para obter esse array, no array de species, utilizei a HOF filter para filtrar os objetos cuja chave availability possuiam o dia específico (como o valor dessa chave é um array também, utilizei o some para verificar se algum dos elementos corresponde ao dia que eu quero), por fim, utilizei o map para me retornar um array com os valores dos nomes das espécies somente, ao invés de me retornar o objeto inteiro.
// Se a função receber um nome de um animal (verificação com a HOF some se o name é igual), será retornado o valor da chave availability daquele animal, que é o array com os dias.
// Se receber um dia da semana, (verificação com a HOF some a partir do array de dias da semana) será retornado somente o objeto que está dentro da chave correspondente ao dia

console.log(getSchedule());
console.log(getSchedule('lions'));
console.log(getSchedule('Monday'));