const numbers = [12, 40, 8, 11, 55, 18, 44, 55, 61, 3];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(n => n % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const cheap = products.find(p => p.price < 40000);
console.log(cheap);