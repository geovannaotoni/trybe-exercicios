let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[moradores.blocoDois.length-1].sobrenome} mora no ${moradores['blocoDois'][1]['andar']}º andar, apartamento ${moradores['blocoDois'][1]['apartamento']}.`)

for (let key in moradores.blocoUm) {
  console.log(`${moradores.blocoUm[key].nome} ${moradores.blocoUm[key].sobrenome}`)
}

//ou
for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(`${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`)
}

for (let index = 0; index < moradores.blocoDois.length; index += 1) {
  console.log(`${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome}`)
}