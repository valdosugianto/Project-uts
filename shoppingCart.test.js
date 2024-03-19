const calculateTotal = require('./shoppingCart');

test('calculates the total price of items in the shopping cart', () => {
  const items = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ];

  const total = calculateTotal(items);

  expect(total).toBe(60);
});
