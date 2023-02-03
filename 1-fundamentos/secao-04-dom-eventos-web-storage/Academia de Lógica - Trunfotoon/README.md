
## Atividade - Trunfotoon! :flower_playing_cards:

### :pencil: Descrição da atividade: 

Criar um jogo de cartas online similar ao [SuperTrunfo](https://pt.wikipedia.org/wiki/Super_Trunfo).

### :speech_balloon: Cenário: 

Depois de construir a estrutura da página de um Zoológico, criar nossa primeira [Landing page](https://pt.wikipedia.org/wiki/Landing_page) e iniciar no mundo do JavaScript, chegou o momento de ir um passo mais longe.

Surgiu uma demanda que vai levar tuas habilidades ainda mais longe, e te permitir pela primeira vez criar páginas com interação da pessoa usuária.

Leia com atenção a descrição do site que deve construir, e conforme os conhecimentos vão acumulando e a complexidade das páginas aumenta, não se esqueça do que aprendeu sobre separar o desenvolvimento por requisitos e seguir com calma em sua construção.

### :white_check_mark: Explicação

Você do passado já deixou os arquivos HTML e CSS prontos, e agora só precisa finalizar a parte do JavaScript, justamente o que vai permitir a página ser dinâmica. Ou seja, todo conteúdo deve ser desenvolvido no arquivo `script.js`.

O intuito no dia de hoje é criar as cartas que vão aparecer para seleção na página. A demanda é que o código permita todo array que satisfaça a estrutura estipulada no contrato feito com o time de Back-End. Exemplo de estrutura do array:

```
[
  {
    id: string,
    imageUrl: string,
    name: string,
    charisma: number,
    power: number,
    popularity: number,
  },
  ...
]
```

Como o array contendo as informações sobre as cartas vão chegar através de um banco de dados, sua função é permitir que as cartas sejam criadas dinamicamente na página, funcionando primeiramente para um array provisório que o time já deixou pronto no arquivo `cartoons.js`, que está no diretório `data`.

### :pushpin: Requisitos

  1. Acesse o arquivo `cartoons.js` e compreenda a estrutura do array
	  - Compreenda quais dados são necessários ao criar a carta

  2. Crie uma função para criar cada carta
	  - A função deve receber três parâmetros: `id`, `src` e `name`
	  - O parâmetro `id` vai receber o dado de identificação da carta e atribuir na propriedade `id` do elemento
	  - O parâmetro `src` vai receber o link para a imagem da carta e atribuir na propriedade `src` do elemento `img` criado
	  - O parâmetro `name` vai receber o nome da carta e atribuir na propriedade `alt` do elemento `img` criado
	  - O elemento `img` deve ter a classe `card`

  3. Altere a função anterior para além de criar o elemento, adicioná-lo na página
	  - Guarde o elemento de classe `cartoons` em uma variável
	  - Ajuste a função anterior para adicionar cada carta ao elemento de classe `cartoons`

  4. Crie uma função para adicionar todas as cartas na página
  	  - Utilize a variável `cartoons` que foi atribuída no arquivo `cartoons.js` para obter as informações de cada carta contida no array
	  - Uso um laço de repetição para a cada iteração executar a função criada no requisito 2

### :trophy: Finalizando 
Já iniciamos a construção do nosso Trunfotoon, você conseguiu utilizar e treinar os conteúdos vistos até aqui como:
 - Logica de programação
 - Laços de repetição
 - Arrays
 - Funções 
 - Dom e seletores
 - Criar elementos de forma dinâmica 