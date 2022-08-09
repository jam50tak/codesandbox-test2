/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数は再宣言可能";
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// // letは上書きが可能
// val2 = 'let変数を上書き';
// console.log(val2);

// // letは再宣言不可
// let val2 = 'let変数を再宣言';

// const
//const val3 = "const変数";
//console.log(val3);

// constは上書きが不可
//val3 = 'const変数を上書き';

// constは再宣言も不可
//const val3 = 'const変数を上書き';

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "ジャム",
//   age : 42,
// };
// val4.name = "ジャズ";
// val4.address = "東京";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//const name = "jam";
//const age = 42;
//私の名前はjamです。年齢は42歳です。
//const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
//console.log(message1);

//テンプレート文字列の場合
//const message2 = `私の名前は${name}です。年齢は${age}です。`
//console.log(message2);

/**
 * アロー関数
 */

//従来
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};

console.log(func1("fanc1です"));

//アロー関数
//const func2 = (str) => {
// return str;
//}
const func2 = (str) => str;

console.log(func2("fanc2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(1, 3));

/**
 * 分割代入
 */

//  const myProfile = {
//    name : "じゃむ",
//    age : 42,
//  };

//  const message3 = `名前は${myProfile.name}で、年齢は${myProfile.age}歳です。`
// console.log(message3);

// const {name, age} = myProfile;
// const message4 = `私の名前は${name}で、年齢は${age}歳です。`
// console.log(message4);

const myProfile = ["jam", 42];
const message5 = `私の名前は${myProfile[0]}で、年齢は${myProfile[1]}歳です`;
console.log(message5);

const [name, age] = myProfile;
const message6 = `私の名前は${name}で、年齢は${age}歳です`;
console.log(message6);

/**
 * デフォルト値
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちわ。${name}さん！`);
sayHello("jam");

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [8, 2, 6];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0] , arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [5,33];
// const arr6 =  [...arr4];
// console.log(arr6);
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["中田", "山田", "jam"];
// for (let i = 0; i < nameArr.length; i++){
//   console.log(`${i+1}番目は${nameArr[i]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, i)=>console.log(`${i+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// })
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "jam") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？　条件がture : false
//const val1 = 1 > 0 ? "true" : "false";
//console.log(val1);

// const num = 1300;
//console.log(num.toLocaleString());

// const formatedNum = typeof num === 'number'? num.toLocaleString() : "数値を入力してください"
// console.log(formatedNum);

// const checkSum = (num1, num2) =>{
//   return num1 + num2 > 100 ? "100超" : "許容範囲内"
// }
// console.log(checkSum(90, 20));

/**
 * 論理演算子のほんとうの意味
 */
const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log("1か2がtrue");
}

// if (flag1 && flag2){
//   console.log("1も2もtrue");
// }

// ||の左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
