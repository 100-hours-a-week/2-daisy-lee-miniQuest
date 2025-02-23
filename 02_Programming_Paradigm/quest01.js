const arr = [1, 2, 3, 4, 5];

const resultSum = arr.reduce(
    (accmulator, currentValue) => accmulator + currentValue
);

console.log("result : " + resultSum);