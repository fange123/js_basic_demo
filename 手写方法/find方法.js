Array.prototype.myFind = function (cb) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
};

const myArr = [1, 50, 45, 67];
const a = myArr.myFind((item) => {
  return item > 40;
});

console.log(a);
