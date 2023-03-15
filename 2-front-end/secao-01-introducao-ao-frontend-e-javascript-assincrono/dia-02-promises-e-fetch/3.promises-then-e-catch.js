const generateRandomNumber = () => Math.round(Math.random() * 10);

const randomPromise = () => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O número ${randomNumber} é inválido, pois é ímpar.`));
      }
    }, 1000);
  })
);

randomPromise()
  .then((response) => {
    console.log(`Promise Resolvida. O número gerado foi ${response}`);
  })
  .catch((error) => {
    console.log(`Promise Rejeitada. ${error.message}`);
  })
  .finally(() => console.log('Fim da execução da promise.'));
