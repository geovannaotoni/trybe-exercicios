const a = 50;
const b = 100;
const c = 30;

if (((a + b + c) === 180) && a > 0 && b > 0 && c > 0) {
  console.log('true');
} else if (((a + b + c) !== 180) && a > 0 && b > 0 && c > 0) {
  console.log('false');
} else {
  console.log('Erro, ângulo inválido')
}

// Resolução
const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}