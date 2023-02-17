// A função cria um objeto com essa estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

const techList = (array, string) => {
  const arrayTech = [];
  const arrayOrd = array.sort();
  if (array.length > 0) {
    for (let index = 0; index < arrayOrd.length; index += 1) {
      arrayTech.push({
        tech: arrayOrd[index],
        name: string,
      })
    }
    return arrayTech;
  }
  return 'Vazio!'
};

module.exports = techList;