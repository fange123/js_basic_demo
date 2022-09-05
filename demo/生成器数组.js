//# 写一个[1,undefined,undefined,undefined,undefined...,100]的数组
// * 定义一个生成器对象
//* 我的方法：
function* fn(n) {
  yield 1;
  for (let i = 0; i < n; i++) {
    yield undefined;
  }
  yield 100;
}
const arr = [];
for (const item of fn(98)) {
  //!:使用迭代器遍历，相当于调用了生成器的.next()方法，所以才会依次往下执行
  arr.push(item);
}

// console.log(arr);

//# 推荐的方法
const myArr = new Array(100);
myArr.fill(undefined);
myArr[0] = 0;
myArr[100] = 100;
// console.log(myArr);

//* 下一次.next()的参数会传给上一次让函数暂停的yield关键字
function* gfn(init) {
  console.log(init + "a");
  console.log(yield);
  console.log(yield);
}

let g = gfn("1");
g.next("2"); //1a
g.next("3"); //3
g.next("4"); //4
//{value:undefined, done:false}
