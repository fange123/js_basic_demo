// ~for..of
// 1.遍历的是数组元素值
// 2.适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合.
// 3.不能遍历对象,因为没有迭代器iterator对象.
// 4.与forEach()不同的是，它可以正确响应break、continue和return语句
// 5.只遍历数组内元素，不会遍历原型上的

//~ for-in
// 1.遍历的是数组的索引（即键名）
// 2.遍历顺序可能不是实际的内部顺序
// 3.遍历所有的可枚举属性，包括原型。例如的原型方法method和name属性
// 4.适合遍历对象

const obj = {
  name: "zs",
  value: 20,
  say() {
    console.log("hello");
  },
};
Object.getPrototypeOf(obj).sing = function () {
  console.log("jj");
};
obj.__proto__.hh = "hh";
for (const key in obj) {
  console.log(" ", obj[key]); //会把sing方法,hh也给遍历出来
}

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj)) {
    const element = obj[key];
    console.log(" ", element);
  }
}
