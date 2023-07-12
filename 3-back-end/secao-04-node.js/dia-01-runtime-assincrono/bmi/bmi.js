const readline = require('readline-sync');
const { BMI_MAX_AND_MIN } = require('./imcs');
const weightInKg = readline.questionFloat('What is your weight (kg)?');
const heightInM = readline.questionFloat('What is your height (m)?');

const handleBMI = (weight, height) => {
  const bmi = weight / (height ** 2);
  return bmi;
};

const handleBMIResult = (bmi) => {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]
  const resultFind = statuses.find((stat) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[stat];
    const verify = bmi >= minBMI && bmi <= maxBMI;
    return verify;
  });
  return resultFind;
};

const main = () => {
  const bmi = handleBMI(weightInKg, heightInM);
  const bmiResult = handleBMIResult(bmi); 
  console.log(`Weight:${weightInKg} kg, Height: ${heightInM} m, BMI: ${bmi.toFixed(2)}, ${bmiResult}`);
}

main();

module.exports = { handleBMI };



// console.log(handleBMI(weightInKg, heightInCm));

// const imc = (weight, height) => {
//   return weight / (height) ** 2
// };
// console.log(imc(50, 1.67));
