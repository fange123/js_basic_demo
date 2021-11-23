let i = 0;
setTimeout(() => {
  console.log(++i);
}, 2000);
setTimeout(() => {
  console.log(++i);
}, 2000);

// setTimeout(() => {
//   console.log(2);
// }, 2);
// setTimeout(() => {
//   console.log(1);
// }, 1);
// setTimeout(() => {
//   console.log(0);
// }, 0);

1;
0;
2;

//即使定时器的时间相同，但是在主线程里面还是依次执行的，不是同时执行
