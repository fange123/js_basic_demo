setTimeout(() => {
  console.log("1");
}, 4000);
setTimeout(() => {
  console.log("2");
}, 3900);

for (let index = 0; index < 100; index++) {
  console.log("");
}
console.log("主线程");

//TODO:定时器模块里面，从上到下“消耗”定时器的时间，谁先走完谁先去宏任务队列
