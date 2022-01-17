/**
 *
 * @param {*} n
 * @return {*}
 */
const format = (n) => {
  let num = n.toString(); //12345678
  let len = num.length; //8
  if (len <= 3) {
    return num;
  } else {
    let temp = "";
    let remainder = len % 3;
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        "," +
        num.slice(remainder, len).match(/\d{3}/g).join(",") +
        temp
      );
    } else {
      // 3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
    }
  }
};

//使用：3000,30000,300000
// console.log(format(3000));
// console.log(format(30000));
// console.log(format(300000));
// console.log("31234".slice(2, 5).join(","));
console.log("123456789".slice(0, 9).match(/\d{3}/g)); //[ '123', '456', '789' ]
console.log("345678".match(/\d{3}/g)); //[ '345','678' ]

//*  这里用到了正则表达式 match作为匹配，返回值是一个数组,我觉得很巧妙

const format_demo = (n) => {
  //*  /B 	匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。
  //*  (?=pattern)	正向肯定预查（look ahead positive assert），在任何匹配pattern的字符串开始处匹配查找字符串。
  return n.toString().replace(/(?=(\B\d{3})+$)/g, ",");
};
const format_my = (n) => {
  return n.toLocaleString();
};

console.log(format_my(23000340));
console.log(format_demo(23000340));
