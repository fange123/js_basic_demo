Array.prototype.myEvery = function (cb) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }
  let arr = this;
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    //todo:有一个不满足条件就返回false
    if (!cb(arr[i], i, arr)) {
      flag = false;
    }
  }
  return flag;
};

const myArr = [1, 2, 3, 4, 5];
const a = myArr.myEvery((item) => {
  return item > 3;
});

console.log(a);
