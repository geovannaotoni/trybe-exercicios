//Solução 1
// const triangleCheck = (lineA, lineB, lineC) => {
//   if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) || ((lineB < lineA + lineC) && (Math.abs(lineB > lineA - lineC))) || ((lineC < lineA + lineB) && (Math.abs(lineC > lineA - lineB)))) {
//     return true;
//   }
//   if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
//     return true;
//   }
//   return false;
// };

// console.log(triangleCheck(10,14,8)); // true

//Solução 2
// const triangleCheck = (lineA, lineB, lineC) => {
//   let checkOne = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
//   let checkTwo = (lineB < lineA + lineC) && (Math.abs(lineB > lineA - lineC));
//   let checkThree = (lineC < lineA + lineB) && (Math.abs(lineC > lineA - lineB));
//   let conditionOne = checkOne || checkTwo || checkThree;
//   let conditionTwo = ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB));
//   return conditionOne || conditionTwo;
// };

//console.log(triangleCheck(10,14,8)); // true

//Reduzindo a complexidade

// const conditionOne = (lineA, lineB, lineC) => {
//   const checkOne = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
//   const checkTwo = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
//   const checkThree = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
//   const result = checkOne || checkTwo || checkThree;
//   return result;
// };

// const conditionTwo = (lineA, lineB, lineC) => {
//   const checkOne = (lineA < lineB + lineC);
//   const checkTwo = (lineB < lineA + lineC);
//   const checkThree = (lineC < lineA + lineB);
//   const result = checkOne && checkTwo && checkThree;
//   return result;
// };

// const triangleCheck = (lineA, lineB, lineC) => {
//   const checkOne = conditionOne(lineA, lineB, lineC);
//   const checkTwo = conditionTwo(lineA, lineB, lineC);
//   const check = checkOne || checkTwo;
//   return check; 
// };

// console.log(triangleCheck(10,14,8)); //true
// console.log(triangleCheck(10,13,2)); //false
// console.log(triangleCheck(17,4,12)); //false
// console.log(triangleCheck(3,5,10)); //false



//Tentando reduzir a complexidade

const conditionOne = (lineX, lineY, lineZ) => {
  const check = (lineX < lineY + lineZ) && (lineX > Math.abs(lineY - lineZ));
  return check;
};

// const conditionTwo = (lineX, lineY, lineZ) => {
//   const check = (lineX < lineY + lineZ);
//   return check;
// };

const triangleCheck = (a, b, c) => {
  const checkOne = conditionOne(a, b, c) || conditionOne(b, a, c) || conditionOne(c, a, b);
  // const checkTwo = conditionTwo(a, b, c) && conditionTwo(b, a, c) && conditionTwo(c, a, b);
  //const check = checkOne || checkTwo;
  return checkOne; 
};
console.log(triangleCheck(10,14,8)); //true
console.log(triangleCheck(10,13,2)); //false
console.log(triangleCheck(17,4,12)); //false
console.log(triangleCheck(3,5,10)); //false


// const conditionOne = (lineA, lineB, lineC) => {
//   const checkOne = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
//   const checkTwo = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
//   const checkThree = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
//   const result = checkOne || checkTwo || checkThree;
//   return result;
// };

// const conditionTwo = (lineA, lineB, lineC) => {
//   const checkOne = (lineA < lineB + lineC);
//   const checkTwo = (lineB < lineA + lineC);
//   const checkThree = (lineC < lineA + lineB);
//   const result = checkOne && checkTwo && checkThree;
//   return result;
// };

// const triangleCheck = (lineA, lineB, lineC) => {
//   const checkOne = conditionOne(lineA, lineB, lineC);
//   const checkTwo = conditionTwo(lineA, lineB, lineC);
//   const check = checkOne || checkTwo;
//   return check; 
// };