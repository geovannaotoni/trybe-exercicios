class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string { return this._name; }
  set name(newValue: string) { this._name = newValue; }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string { return this._name; }
  get price(): number { return this._price; }

  set name(newValue: string) { this._name = newValue; }
  set price(newValue: number) { 
    if (newValue < 0) throw new Error('Price must be positive');
    this._price = newValue; 
  }
}

class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(
    client: Client, 
    items: OrderItem[],
    paymentMethod: string,
    discount: number,
    ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client { return this._client; }
  get items(): OrderItem[] { return this._items; }
  get paymentMethod(): string { return this._paymentMethod; }
  get discount(): number { return this._discount; }

  set client(newValue: Client) { this._client = newValue; }
  set items(newValue: OrderItem[]) { 
    if (newValue.length < 1) throw new Error('Order must have at least 1 item');
    this._items = newValue; 
  }
  set paymentMethod(newValue: string) { this._paymentMethod = newValue; }
  set discount(newValue: number) {
    if (newValue < 0) throw new Error('Discount must be positive or zero');
    this._discount = newValue;
  }

  total(): number {
    return this._items.reduce((acc, curr) => acc + curr.price, 0);
  }

  totalWithDiscount(): number {
    return this.total() * (1 - this._discount);
  }
}

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.total());
console.log('Valor com desconto: ', order.totalWithDiscount());