const fs = require('fs').promises;
const path = require('path');

// Ex 1
const readAll = async () => {
  const fileContent = await fs.readFile(path.join(__dirname, '/simpsons.json'));
  const simpsons = JSON.parse(fileContent);
  simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`))
}

// Ex 2
const getSimpsonById = async (id) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpsonFound = simpsons.find(simp => simp.id == id);
  if (!simpsonFound) {
    throw new Error('id não encontrado');
  }
  return simpsonFound;
}

// Ex 3
const filterSimpsonsById = async (ids) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newSimpsonsList = simpsons.filter((simp) => !ids.includes(Number(simp.id)));
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsList));
  return newSimpsonsList;
}

// Ex 4
const createSimpsonsList = async (ids) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newSimpsonsList = simpsons.filter((simp) => ids.includes(Number(simp.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonsList));
};

const addSimpsonToList = async (simpsonName) => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsOldList = JSON.parse(fileContent);
  const lastId = simpsonsOldList[simpsonsOldList.length - 1].id;
  const simpsonsNewList = [...simpsonsOldList, {id: (Number(lastId) + 1).toString(), name: simpsonName}];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsNewList));
};

const alterSimpsonList = async (oldName, newName) => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsList = JSON.parse(fileContent);
  const simpsonFilteredList = simpsonsList.filter(({name}) => name.toLowerCase() !== oldName.toLowerCase());
  const idToChange = simpsonsList.find(({name}) => oldName.toLowerCase() === name.toLowerCase()).id;
  const simpsonsNewList = [...simpsonFilteredList, {id: idToChange, name:newName}];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsNewList));
};

const main = async () => {
  // Ex 1
  // try {
  //   await readAll();
  // } catch (err) {
  //   console.error(`Erro ao ler o arquivo: ${err.message}`);
  // };

  // Ex 2
  // try {
  //   const simpson = await getSimpsonById(1);
  //   console.log(simpson);
  // } catch (err) {
  //   console.error(err.message);
  // }

  // Ex 3
  // try {
  //   const simpsons = await filterSimpsonsById([6, 10]);
  //   console.log('Lista filtrada com sucesso!');
  // } catch (err) {
  //   console.error(err.message);
  // }

  // Ex 4
  // try {
  //   await createSimpsonsList([1, 2, 3, 4]);
  //   console.log('Lista criada com sucesso!');
  // } catch (err) {
  //   console.error(err.message);
  // }

  // Ex 5
  // try {
  //   await addSimpsonToList('Nelson Muntz');
  //   console.log('Simpson adicionado com sucesso!');
  // } catch (err) {
  //   console.error(err.message);
  // }

  // Ex 6
  try {
    await alterSimpsonList('Nelson Muntz', 'Maggie Simpson');
    console.log('Simpson alterado com sucesso!');
  } catch (err) {
    console.error(err.message);
  }
}

main();