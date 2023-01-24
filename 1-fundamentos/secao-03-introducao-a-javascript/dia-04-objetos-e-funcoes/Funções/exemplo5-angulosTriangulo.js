function isTriangle (a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if ((a + b + c) === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro! Ângulos inválidos';
  }
}

console.log(isTriangle(50,100,30));
console.log(isTriangle(90,100,30));
console.log(isTriangle(-50,100,130));