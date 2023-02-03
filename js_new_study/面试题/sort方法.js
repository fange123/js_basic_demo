const arr = [
  {
    name: "zs",
    age: 18,
  },
  {
    name: "ls",
    age: 38,
  },
  {
    name: "wem",
    age: 10,
  },
];
//根据age从大到小排序
const newArr = arr.sort((a, b) => b.age - a.age);
console.log(newArr);
