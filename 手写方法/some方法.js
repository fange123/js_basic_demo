Array.prototype.MySome = function (cb) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }
  let arr = this;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    //todo: 有一个满足条件就返回true
    if ((cb(arr[i]), i, arr)) {
      flag = true;
    }
  }
  return flag;
};

const myArr = [1, 3, 4, 7];

const a = myArr.MySome((item) => {
  return item === 7;
});

console.log(a);
