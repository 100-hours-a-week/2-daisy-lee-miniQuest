const color = 'blue';

const firstLevel = () => {
  let color = 'red';
  
  const secondLevel = () => {
    let color = 'green';
    console.log(color); // (1) green, secondLevel() 내에 지역변수로 선언된 color를 가져옴
  };
  
  secondLevel();
  console.log(color); // (2) red, firstLevel() 내에 지역변수로 선언된 color를 가져옴
};

firstLevel();
console.log(color); // (3) blue, 전역변수로 선언된 color를 가져옴
