const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIT(number);
        output.push(doubled);
    }
    return output;
}

function doubleITOld(num) {
    return num * 2;
}

const doubleIT = num => num * 2;

const makeDouble = numbers.map(doubleIT);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble3 = numbers.map(x => x * 3);
// console.log(makeDouble3)
// console.log(makeDoubleDirect);

const makeFiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(makeFiveTimes);
/*
purpose:
1. get an array
2. for every element of the array do something
3. store the result in an array
4. return the result an array
*/

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);