const myFun = <T>(a: T, b: T) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return `${a}-${b}`;
  }
};
//# 范型，宽泛的类型，动态指定的

//* 范型也会自动推断
myFun<number>(10, 20);
myFun<string>("10", "20");

console.log(myFun(20, 30));
console.log(myFun("20", "30"));
