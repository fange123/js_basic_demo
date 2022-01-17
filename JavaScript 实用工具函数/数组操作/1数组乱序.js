/**
 *
 * @param {*} arr
 * @return {*}
 */
const arrScrambling = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    console.log(arr[i] + "------");
    console.log(arr[randomIndex] + "+++++++");
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};

//使用：
const arr = [1, 2, 3];
console.log(arrScrambling(arr));

//* Math.round  四舍五入
// console.log(Math.random(8));
// console.log(Math.round(Math.random(8)) + 1);
