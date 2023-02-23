const strings = (array) => {
  if (array.length === 0) {
    return false;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'string') {
      return false;
    }
  }
  return true;
};

module.exports = strings;