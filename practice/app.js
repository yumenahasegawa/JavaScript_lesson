console.log('1つ目の値', '2つ目の値');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

let age = 23;
console.log(age);

let again = '定義しました';
console.log(again);

again = '再代入はできます';
console.log(again);

// let again = '再定義します'; 

let single = '文字列型です';
console.log(single);

let double = '英語だとstringといいます。';
console.log(double);

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);


let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加


let number = 5;
number = number + 3;
console.log(number);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let stringNum1 = 25;
let stringNum2 = 2;
console.log(stringNum1 + stringNum2);

let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(John.bloodType);

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';
console.log(Andy);

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2

function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea();   // ←これが関数の呼び出し

function define1() { // define1という名前の関数
  return 'This is console in showConsole function!';
}

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)  // 名前付きの関数を渡す時は、()を付けずに渡す前付きの関数を渡す時は、()を付けずに渡す

let numVal = 8;
let strVal = 'text';

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let mixed = [4, '2', 5, '8', '9', 0, 1];

function checkAndPrint(value) {
  if (typeof value !== 'number') {
    console.log('not number');
  } else if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

for (let i = 0; i < mixed.length; i++) {
  checkAndPrint(mixed[i]);
}

function hello(name5) {
  console.log("田中さん、こんにちは");
  return `${name5}さん、こんにちは`;
  console.log("鈴木さん、こんにちは");
}

let name5 = '佐藤';
console.log(hello(name5));