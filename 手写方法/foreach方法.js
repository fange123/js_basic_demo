Array.prototype.myForEach = function (cb) {
  if (typeof cb !== "function") {
    throw new Error(`${cb} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not an array`);
  }

  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};

//* test

const myArr = [2, 3, 4, "f", "h"];
myArr.myForEach((item, i, arr) => {
  arr[i] = item + 1;
  console.log(item, i, arr);
});

console.log(myArr);
