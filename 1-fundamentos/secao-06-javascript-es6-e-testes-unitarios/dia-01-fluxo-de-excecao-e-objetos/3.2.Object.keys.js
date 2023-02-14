const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const nivelHabilidades = (objeto) => {
  const arrayHabilidades = Object.keys(objeto);
  for (let index in arrayHabilidades) {
    console.log(`${arrayHabilidades[index]}, Nível: ${objeto[arrayHabilidades[index]]}`);
  }
};

nivelHabilidades(student1);
nivelHabilidades(student2);