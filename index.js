// job 1
['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'].forEach((item) => {
  console.log(`Привет, ${item}`);
});

// job 2
console.log([1, 2, 3, 4, 5].map((item) => item * 10));

// job 3
console.log([5, 12, 8, 130, 44].filter((item) => item > 10));

// job 4
const users = [
  { name: 'Иван', age: 23 },
  { name: 'Мария', age: 18 },
  { name: 'Алексей', age: 32 },
  { name: 'Ольга', age: 24 },
  { name: 'Сергей', age: 17 },
  { name: 'Анна', age: 21 },
];
console.log(users.filter((item) => item.age > 18).map((item) => `${item.name} (${item.age})`));

// job 5
const sales = [
  { product: 'Телефон', price: 50000, quantity: 1 },
  { product: 'Чехол', price: 1500, quantity: 2 },
  { product: 'Зарядное устройство', price: 2500, quantity: 1 },
];
console.log(sales.reduce((sum, item) => sum + item.price, 0));
