const numbers = [12, 24, 44, 66];
const half = numbers.map(a => a / 4);
const thirds = numbers.map(a => a + 4);
// console.log(half);
// console.log(thirds);

const brothers = ['Mizanur', 'Mamoon', 'Minan', 'Munna'];
const firstLetters = brothers.map(b => b[0]);
// console.log(firstLetters);
const nameLengths = brothers.map(b => b.length);
// console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 },
];

// const items = products.map(p => console.log(p.name));
const items = products.map(p => p.price);
console.log(items);