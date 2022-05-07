Array.prototype.myReduce = function (cb, prev) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (!prev) {
      prev = cb(arr[i], arr[i + 1], i + 1, arr);
      i++; //赋值完之后  prev有值了  下一次应该从第2项开始
    } else {
      prev = cb(prev, arr[i], i, arr);
    }
  }
  return prev;
};

const myArr = [1, 2, 3, 4, 5];
//* 有初始值
const a = myArr.myReduce((initValue, item) => {
  return initValue + item;
}, 100);

const c = myArr.reduce((initValue, item) => {
  return initValue + item;
}, 100);
console.log(a); //115
console.log(c + "😄"); //115
//* 没有初始值
const b = myArr.myReduce((initValue, item) => {
  return initValue + item;
});
const d = myArr.reduce((initValue, item) => {
  return initValue + item;
});

console.log(b); //16
console.log(d + "🙏"); //16
