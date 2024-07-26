//JavaScript問題
//Q1
let nickname = 'ゆめな';
let age = '23';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age +'歳です。');

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5
let JohnAge = playerList[0].age;
let BobAge = playerList[1].age;
let MichaelAge = playerList[2].age;
const ages = [JohnAge, BobAge, MichaelAge];
let sum = JohnAge + BobAge + MichaelAge;
const average = sum / ages.length;
console.log(average);

//Q6
function sayHello() {
  console.log('Hello');
};

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

//Q7
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello!');
};

user.sayHello();

console.log(user, user.length);

//Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.add(2, 5);

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.subtract(20, 10);

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.divide(10, 2);

//Q9
function remainder(x, y) {
  const number= x % y;
  return number;
}

const x = 5;
const y = 3;
const number = remainder(x, y);

console.log(x + 'を' + y + 'で割った余りは' + number + 'です。');

//Q10
//ある関数の中で定義した変数は変数の有効範囲というスコープがあるため、その関数の中からしか参照できないため、エラーが発生する。
//そのエラーを解決するには、今のままだと関数内でしか参照できない変数であるローカル変数なので、どこからでも参照できる変数であるグローバル変数にするために関数の外側に変数を定義する必要がある。

//JavaScript応用問題
//Q1
let round = Math.floor(Math.random() *10);
console.log(round);

//Q2
setTimeout(function() {
  console.log('Hello World!');
},
  3000);

//Q3
let num = 3;
if (num > 0) {
  console.log(num + ' is greater than 0');
} else if (num < 0) {
  console.log(num + ' is less than 0');
} else if (num === 0) {
  console.log(num + ' is 0');
};

//Q4
let numbers = [];
for (let i = 0; i < 100; i++){
  numbers.push(i);
};

console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i];
  
  if (typeof value !== 'number') {
    console.log('not number');
  } else if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};