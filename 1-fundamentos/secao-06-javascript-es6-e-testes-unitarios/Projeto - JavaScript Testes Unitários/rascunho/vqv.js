const vqv = (name, age) => {
  if (!name || !age) {
    return undefined;
  }
  return `Oi, meu nome é ${name}!
  Tenho ${age} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`
};

console.log(vqv('Tunico', 30));
console.log(vqv());