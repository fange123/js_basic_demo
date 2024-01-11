{
    //* 范性:T其实相当于没有类型，但是在定义的时候又需要一些类型约束，所以就可以使用范型的继承
    var myFun = function (a) {
        //~让范型T继承字符串和数组的属性，字符串和数组都有length属性
        return a.length;
    };
    console.log(myFun("12345"));
    console.log(myFun([1, 2, 3, 4, 5]));
    var fn = function (a, b) {
        return (a + b);
    };
    console.log(fn(1, 2));
}
