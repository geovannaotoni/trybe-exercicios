// function countBreads(breads: string[]): number {
//   return breads.length;
// }

function countBreads<Type>(breads: Type[]): number {
  return breads.length;
}

type CommonBread = {
  name: string,
  allergens: string[]
};

const paoDeSal: CommonBread = {
  name: 'Pão de sal',
  allergens: ['Gluten'],
};

const paoDoce: CommonBread = {
  name: 'Pão doce',
  allergens: ['Gluten'],
};


// Erro de tipagem! "Argument of type 'CommonBread[]' is not assignable to parameter of type 'string[]'. Type 'CommonBread' is not assignable to type 'string'"
// const myBreads = [paoDeSal, paoDoce];
// console.log(countBreads(myBreads));

// Generics
const myBreadsAsStrings = ['Pão de sal', 'Pão doce'];
console.log(countBreads<string>(myBreadsAsStrings));

const myBreads = [paoDeSal, paoDoce];
console.log(countBreads<CommonBread>(myBreads));



function sendAlertAboutAllergens<BreadType, AllergensType>(
  breads: BreadType[],
  allergens: AllergensType[],
): string {
  return `Atenção! ${breads.join(' e ')} têm como alergênicos: ${allergens.join(', ')}`;
}

console.log(sendAlertAboutAllergens<string, string>(['Pão de sal', 'Pão doce'], ['Gluten']));

const allergensIds = [123, 445, 221];
console.log(sendAlertAboutAllergens<string, number>(['Pão de sal', 'Pão doce'], allergensIds));


// outros exemplos
function imprimir<T>(valor: T): void {
  console.log(valor);
}

imprimir<string>("Olá, mundo!"); // imprime "Olá, mundo!"
imprimir<number>(42); // imprime 42


// promises
async function fetchApi<ResponseType>(endpoint: string): Promise<ResponseType> {
  const { data } = await axios.get<ResponseType>(`http://localhost:3001/${endpoint}`);
  return data;
}

fetchApi<Bread[]>('breads');
fetchApi<Flour[]>('flours');