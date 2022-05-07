Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }
  let arr = this;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    //todo:满足cb函数的条件就把值存入新数组
    cb(arr[i], i, arr) && newArray.push(arr[i]);
  }

  return newArray;
};

const myArr = [1, 2, 3, 4, 5, "g"];
const a = myArr.myFilter((item) => {
  return typeof item === "string";
});

console.log(a);
