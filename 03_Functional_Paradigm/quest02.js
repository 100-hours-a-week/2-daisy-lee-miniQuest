const arr = [1, 2, 3, 4, 5];
// const sumArray = (arr) => arr.reduce(
//     (accumualtor, currentValue) => accumualtor + currentValue
// );
const sumArray = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
const total = sumArray(arr);
console.log("total : " + total);