setTimeout(() => {
  new Promise((resolve) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("haha");
        new Promise((resolve) => {
          console.log("66");
          resolve();
        }).then(() => console.log("pp"));
      }, 500);
    }, 2000);
    resolve();
  }).then(() => console.log("vv"));
  console.log("jj");
}, 1000);

new Promise((resolve) => {
  console.log("oo");
  resolve();
}).then(() => {
  console.log("mm");
  setTimeout(() => {
    console.log("ll");
  }, 1000);
});

console.log("kk");

//同步代码-微任务-宏任务
oo;
kk;
mm;
jj;
vv;
ll;
haha;
66;
pp;
