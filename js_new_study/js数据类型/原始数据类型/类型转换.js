//# 转换成字符串
//* toString()可以转换成字符串
let a = 99n;
a = a.toString();
console.log(a); //99

//!:但是null和undefined不能调用toString()方法,因为他俩里面啥都没有，调用毛线啊，不过可以使用String方法
//console.log(null.toString());
console.log(String(null)); //“null”

//#转换成数值
//* Number()
let b = "9";
b = Number(b);
console.log(b); //9
//* 如果字符串是一个合法的数字，比如‘10’，‘10.8’等，会完全转成数字
//* 如果不是，会转成NAN
console.log(Number("abc")); //NAN
console.log(Number("123abc")); //NAN
console.log(typeof Number("abc")); //number
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NAN
//* 有方法专门将字符串转换为数值：parseInt()字符串转整数------parseFloat()字符串转浮点数
console.log(parseInt("10.9")); //10
console.log(parseInt("10abc")); //10
console.log(parseInt("a10abc")); //NAN
console.log(parseFloat("10.99abc")); //10.99
//* parseFloat() 所解析的字符串中第一个小数点是有效的
console.log(parseFloat("10.99.01abc")); //10.99
//* 如果字符串中包含的是一个可解析为正数的数（没有小数点，或者小数点后都是零），parseFloat() 会返回整数。
console.log(parseFloat("10.00")); //10
console.log(parseFloat("0010.00")); //10
//* JavaScript 中 Number()、parseInt()、parseFloat()的区别：https://www.cnblogs.com/joe-and-joan/p/10064464.html

console.log("------------------");
//# 转成布尔值 使用Boolean（）函数将其他类型转换成布尔值
//*数字  只有0和NAN是false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(Infinity)); //true
//* 字符串  只有空字符串是false
//* 字符串  只有空字符串是false,空格是true
console.log(Boolean("")); //false
const s = " ";
console.log(Boolean(s)); //true

//* null和undefined肯定是false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

//* 对象通常都是true
console.log(Boolean([])); //true
