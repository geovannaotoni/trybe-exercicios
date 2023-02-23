const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const infosArray = Object.values(order);
  // console.log(infosArray);
  console.log(`'Olá ${infosArray[3]['delivery']['deliveryPerson']}, entrega para: ${infosArray[0]}, Telefone: ${infosArray[1]}, R. ${infosArray[2]['street']}, Nº: ${infosArray[2]['number']}, AP: ${infosArray[2]['apartment']}'`);
};

customerInfo(order);

const orderModifier = (order) => {
  order['name'] = 'Luiz Silva';
  order['payment']['total'] = 50;
  const infosArray = Object.values(order);
  console.log(`'Olá ${infosArray[3]['delivery']['deliveryPerson']}, entrega para: ${infosArray[0]}, Telefone: ${infosArray[1]}, R. ${infosArray[2]['street']}, Nº: ${infosArray[2]['number']}, AP: ${infosArray[2]['apartment']}'`);
};

orderModifier(order);