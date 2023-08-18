type Product = {
  barcode: string,
  price: number,
}

// usando Type Assertion para corrigir erro
// function getProduct(): Product {
//   const product = {} as Product;
//   product.barcode = '123c456b789a'; // Error: Property 'barcode' does not exist on type '{}'.
//   return product;
// }

// console.log(getProduct());

// usando Type Annotation 
function getProduct(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 5.5,
  };
  return product;
}

console.log(getProduct());