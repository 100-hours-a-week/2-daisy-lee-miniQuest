// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // 무엇이 출력될까요?
let messageLet = "Hello with let!";

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // 무엇이 출력될까요?
const messageConst = "Hello with const!";

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // 무엇이 출력될까요?
const greet = () => "Hello, Arrow Function!";

// 결과 : ReferenceError 가 발생하여 실행되지 않고 오류 발생
// 이유 : let, const 예약어는 호이스팅되긴 하지만, var와 다르게 TDZ(일시적 사각지대)가 일어나기 때문에 초기화 이전에 접근할 경우 참조를 하지 못하여 오류가 발생함