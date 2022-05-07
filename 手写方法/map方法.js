Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }

  let arr = this;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    //todo:需要深拷贝
    newArray[i] = cb(arr[i], i, arr);
  }

  return newArray;
};

const myArr = [1, 9, 3, "c"];

const a = myArr.myMap((item) => {
  return item + 1;
});

console.log(a);
