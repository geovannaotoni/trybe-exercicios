const data = require('./data');
const getFullReport = () => {
  const result = data.species.reduce(((acc, curr) => {
    acc[curr.location] = data.species.filter(({location}) => location === curr.location);
    return acc;
  }), {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  });
  return result;
};
// console.log(getFullReport());

const getAnimalMap = (args) => {
  const result = data.species.reduce(((acc, curr) => {
    acc[curr.location] = data.species.filter(({ location }) => location === curr.location);
    if (!args) {
      acc[curr.location] = acc[curr.location].map((element) => element.name)
    }
    if (args && args.includeNames === true) {
      acc[curr.location] = acc[curr.location].map(({ name , residents }) => ({ [name]: residents.map((animal) => animal.name)}));
    }
    return acc;
  }), {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  });
  return result;


  // const fullReport = Object.entries(getFullReport());
  // if (!args) {
  //   return fullReport.map(() => {});
  // }
  
};

// console.log(getAnimalMap());
console.log(getAnimalMap({includeNames: true}));
// console.log(getAnimalMap({sorted: true}));
// console.log(getAnimalMap({sex: 'female'}));


const objeto = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
};

const expected = {
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
  ],
  NW: [
    { tigers: ['Esther', 'Shu'] },
    { bears: ['Edwardo', 'Hiram', 'Milan'] },
    { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
  ],
  SE: [
    { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
    { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
  ],
  SW: [
    { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] },
  ],
};
console.log(Object.entries(expected).reduce(((acc, curr) => {
  acc[curr[0]] = curr[1].sort();
  return acc; 
}), {}))