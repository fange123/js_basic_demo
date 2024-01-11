{
  //* 范性:T其实相当于没有类型，但是在定义的时候又需要一些类型约束，所以就可以使用范型的继承
  const myFun = <T extends string | any[]>(a: T) => {
    //~让范型T继承字符串和数组的属性，字符串和数组都有length属性
    return a.length;
  };

  console.log(myFun("12345"));
  console.log(myFun([1, 2, 3, 4, 5]));

  const fn = <T extends number>(a: T, b: T): T => {
    return (a + b) as T;
  };

  console.log(fn(1, 2));
}
