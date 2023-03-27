export const getAddress = async (cep) => {
  const awesomeApiURL = `https://cep.awesomeapi.com.br/json/${cep}`;
  const brasilApiURL = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  let fullAd = '';
  await Promise.any([fetch(awesomeApiURL), fetch(brasilApiURL)])
    .then((response) => response.json())
    .then((data) => {
      if (data.cep) {
        fullAd = `${data.address} - ${data.district} - ${data.city} - ${data.state}`
          || `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
      } else {
        throw new Error('CEP não encontrado');
      }
    });
  return fullAd;
};

export const searchCep = async () => {
  const span = document.querySelector('.cart__address');
  try {
    const cep = document.querySelector('.cep-input').value;
    const address = await getAddress(cep);
    span.innerHTML = address;
  } catch (error) {
    // funcionou no vite, mas nao passou no examinador
    // span.innerHTML = error.message;
    span.innerHTML = 'CEP não encontrado';
  }
};



/*
export const getAddress = () => {
  const cep = document.querySelector('.cep-input').value;
  const awesomeApiURL = `https://cep.awesomeapi.com.br/json/${cep}`;
  const brasilApiURL = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  let fullAd = '';
  Promise.any([fetch(awesomeApiURL), fetch(brasilApiURL)])
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.address) {
        // Rua - Bairro - Cidade - Estado
        fullAd = `${data.address} - ${data.district} - ${data.city} - ${data.state}`;
      } else {
        fullAd = `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
      }
    })
    .catch(() => {
      document.querySelector('.cart__address').innerHTML = 'CEP não encontrado';
      throw new Error('CEP não encontrado');
    });
  return fullAd;
};

export const searchCep = async () => {
  const adress = await getAddress();
  console.log(adress);
  const span = document.querySelector('.cart__address');
  span.innerHTML = adress;
};
*/