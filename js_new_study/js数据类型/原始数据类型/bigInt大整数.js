//* 当数值太大，number类型的数值已经无法满足时，可以使用bigInt大整数
//* 大整数，内存多大，他就可以有多大
//* 以n结尾

const bigNumber = 999999999999999999999n;
const bigNumber_ = BigInt(9999999);

console.log(typeof bigNumber); //bigInt
console.log(typeof bigNumber_); //bigInt

//* 其他进制的数字
//二进制 0b
const a = 0b101010;
//1*2^5+0*2^4+1*2^3+0*2^2+1*2^1+0*2^0 = 32+8+2
console.log(a); //42，输出展示还是以十进制
//八进制 0o
const b = 0o101010;
//十六进制 0x
const c = 0xff;
//15*16^1+15*16^0 = 255

//!:typeof检查的是变量的值的类型,而不是变量的类型，变量没有类型
