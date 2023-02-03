//* call、apply 和 bind 的作用都是改变 this 的指向，
// *其中 call 和 apply 的区别在于它们传参的方式不同——call可以传多个形参，
//* 而apply只能传一个数组形参。而bind和call、apply的区别在于bind不会立即调用，
//* 而是返回一个函数对象，因此开发中一般用bind比较多

const xz = {
  name: "xz",
  age: 18,
  change(age) {
    this.age = age;
  },
};

const wyb = {
  name: "wyb",
  age: 20,
};

console.log(xz.age);
xz.change(30);
console.log(xz.age);

//xz有改变年龄的change方法，wyb没有，他想借xz的用一下
xz.change.call(wyb, 40);
console.log(wyb.age);

xz.change.apply(wyb, [50]);
console.log(wyb.age);

const fun = xz.change.bind(wyb);
fun(60);
console.log(wyb.age);
