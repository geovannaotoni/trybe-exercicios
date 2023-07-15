// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const filterChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  const filteredChocolates = cacauTrybe.chocolates.filter(elem => elem.name.toLowerCase().includes(query.toLowerCase()));
  return filteredChocolates;
};

const writeCacauTrybeFile = async (content) => {
  try {
    const updatedData = JSON.stringify(content, null, 2);
    await fs.writeFile(join(__dirname, path), updatedData);
  } catch (err) {
    console.error('Erro ao salvar o arquivo', err.message);
    return null;
  }
}

const updateChocolate = async (id, updated) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);

  if (!chocolateToUpdate) {
    return false;
  };

  cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
    if (chocolate.id === id) return {...chocolate, ...updated };
    return chocolate;
  });

  await writeCacauTrybeFile(cacauTrybe);
  return { ...chocolateToUpdate, ...updated };
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  filterChocolateByName,
  updateChocolate,
};