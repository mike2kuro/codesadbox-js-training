const myProf = {
  name: "masahiko",
  age: 62
};
console.log(myProf);

const message1 = `1 My name is ${myProf.name}, ${myProf.age} years old.`;
console.log(message1);

// 分割代入　オブジェクトの場合
const { name, age } = myProf;
const message2 = `2 My name is ${name}, ${age} years old.`;
console.log(message2);

// 分割代入　配列の場合は順番で特定
const yourProf = ["chieko", 58];
const message3 = `3 Your name is ${yourProf[0]}, ${yourProf[1]} years old.`;
console.log(message3);

const [n, a] = yourProf;
const message4 = `4 Your name is ${n}, ${a} years old.`;
console.log(message4);

// デフォルト値
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello("Misawa");
sayHello();

const nameArr = ["田中", "三澤", "山田"];

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));
