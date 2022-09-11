const numbers = [12, 48, 8, 11, 55, 18, 44, 2, 61, 3];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);
const odd = numbers.filter(nums => nums % 2 === 1);
// console.log(odd);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 50000 },
];
// const expensive = products.filter(product => product.price > 50000);
const expensive = products.filter(product => product.price < 40000);
console.log(expensive);