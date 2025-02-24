let temperature = 25;
temperature = 30;

const MAX_TEMPERATURE = 35;
MAX_TEMPERATURE = 40; // TypeError: Assignment to constant variable.

// constant variable(상수값)으로 지정되었기 때문에 처음 초기화된 값에서 변수의 값을 재할당하려는 경우,
// 타입의 규칙을 어기게 되기 때문에 에러를 뱉게 됨