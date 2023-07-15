const update = { 
  "name": "Mint Pretty Good",
  "brandId": 2
}

const chocolateToUpdate = { 
  "id": 1,
  "name": "Mint Pretty Good",
  "brandId": 2
}

const response = { ...chocolateToUpdate, ...update };

console.log(response);