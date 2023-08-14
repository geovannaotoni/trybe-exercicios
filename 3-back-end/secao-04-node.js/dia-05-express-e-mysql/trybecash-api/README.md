# no terminal: env $(cat .env)
`env $(cat .env) npm start` ou `env $(cat .env) npm run dev`
# em projetos publicos: adicionar o arquivo .env no .gitignore e deixar o .env-example como exemplo base


⚠️ Atenção: toda vez que uma variável de ambiente é alterada, é necessário parar e reiniciar a aplicação, mesmo quando se utiliza o nodemon, pois estas variáveis de ambiente, por serem temporárias, são “carregadas” uma única vez no momento em que a aplicação é executada.

