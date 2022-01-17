/**
 *
 * @param {*} min
 * @param {*} max
 */
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//使用：点名：取1-32之间的随机数
console.log(randomNum(1, 32));
