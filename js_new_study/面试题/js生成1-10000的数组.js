//*1,Array(10001).keys()是类数组，要转换成真数组
const arr = Array.from(Array(10001).keys()).splice(1);
// console.log(arr);

//* 2，
const array = [];
for (let index = 1; index <= 10000; index++) {
  array.push(index);
}

// console.log(array);

//*3,
const newArr = Array.from({ length: 10000 }, (_, i) => i);
console.log(newArr);
