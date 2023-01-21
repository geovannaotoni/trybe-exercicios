let a = 0;
console.log(a++); // 0, pois o console.log ocorre antes do incremento.
// menos nítido

let b = 0;
console.log(b += 1); // 1, pois a atribuição irá ocorrer antes

let c = 0;
c += 1;
console.log(c); // leitura mais nítida