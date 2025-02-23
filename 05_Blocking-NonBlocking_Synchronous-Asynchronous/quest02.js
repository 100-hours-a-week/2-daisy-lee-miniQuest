function asyncFunction() {
    setTimeout(() => {
        console.log("Async Operation Complete");
    }, 1000);
}

console.log("Start");
asyncFunction();
console.log("End");

// setTimeout은 비동기 방식이기 때문에 작업 요청 후 응답을 콜백 함수로 주게 됨.
// 따라서 "Start"가 찍힌 후 함수를 호출하자마자 다시 본래 작업을 그대로 진행하여 "End"가 찍히고
// asyncFunction은 1초 후 "Async Operation Complete"를 찍게 됨