const people = [
  '90234932482,Antônio Nunes,49,2',
  '90234930885,Mirela Pires,28,3',
  '90234910678,Michael Oliveira,25,3',
  '90234914456,André Fagundes,26,3',
  '90234917658,Bárbara Ferreira,25,1',
];

const roles = ['1,CEO', '2,CTO', '3,Pessoa Desenvolvedora'];

/*
  Nosso objetivo é criar um relatório apenas com o nome e função de cada pessoa.
  Para isso, criaremos um novo array (peopleWithRole) com essas informações seguindo o modelo abaixo:

  Modelo:
    "{Pessoa} trabalha como {função} na Ebytr"

  Exemplo:
    "Thalles Carneiro trabalha como Pessoa Desenvolvedora na Ebytr"
*/

let peopleWithRole = [];

for (let indexPeople = 0; indexPeople < people.length; indexPeople += 1) {
  let person = people[indexPeople].split(',');
  
  let name = person[1];
  let role = person[3];

  for (let indexRoles = 0; indexRoles < roles.length; indexRoles += 1) {
    let roleInfo = roles[indexRoles].split(',');

    if (role === roleInfo[0]) {
      role = roleInfo[1];
    }
  }

  peopleWithRole.push(name + " trabalha como " + role + " na Ebytr");
  // "{Pessoa} trabalha como {função} na Ebytr"
}

console.log(peopleWithRole);