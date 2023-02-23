const techList = (tech, name) => {
  let objectTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectTech.push({
      tech: tech[index], name,
    });
  }
  if (objectTech.length === 0) {
    return [];
  }
  return objectTech;
};

module.exports = { techList };