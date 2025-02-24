if(true) {
    let isRaining = true; // let -> var
}

console.log("isRaining : " + isRaining);
// let으로 선언된 변수는 블록 스코프를 가지기 때문에 해당 블록 내부에서만 유효한 값을 낼 수 있음.
// let을 var로 변경하면 var는 블록 스코프를 가지지 않기 때문에 해당 변수는 함수 스코프(또는 전역 스코프)에 속하게 되어 출력이 가능함