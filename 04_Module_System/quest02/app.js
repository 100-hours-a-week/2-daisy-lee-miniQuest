import { add, subtract } from './operations.js';
import User from './userProfile.js';

const user1 = new User('채원1', 25);
const user2 = new User('채원2', 13);

const ageSum = add(user1.age, user2.age);
const ageSub = subtract(user1.age, user2.age);

console.log("두 사람의 나이를 합한 값은 " + ageSum + " 입니다.");
console.log("두 사람의 나이를 뺀 값은 " + ageSum + " 입니다.");