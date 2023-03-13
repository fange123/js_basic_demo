//* 原repeat方法
const str = "abc";
const newStr = str.repeat(3);
console.log(newStr);

function myRepeat(str, n) {
  return Array(n + 1).join(str);
}

console.log(myRepeat("apple", 3));

String.prototype.myRepeat = function (n) {
  return Array(n + 1).join(this);
};

console.log(str.myRepeat(3));
