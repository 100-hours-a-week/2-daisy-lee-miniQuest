const message = 'Hello, JavaScript!';

const showMessage = () => {
  console.log(message); // A
  let message = 'Hello, ES6!';
  console.log(message); // B
};

showMessage();
// 예상 결과 : A에서 ReferenceError
// 이유 : A에서 showMessage() 내에 선언된 지역 변수 message가 호이스팅되지만, let으로 선언되어 있기 때문에 TDZ에 갇혀 있어 접근할 수 없는 상태임
// 이 때 만약 showMessage() 내의 message가 선언되지 않았다면 전역 변수인 message를 스코프 체인을 통해 출력되었을 것임