// Promise.resolve()
//   .then(
//     function success(res) {
//       throw new Error("error!!!");
//     },
//     function fail1(err) {
//       console.log("fail1", err);
//     }
//   )
//   .catch(function fail2(err) {
//     console.log("fail2", err);
//   });
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve("resolve1");
// });
// const promise2 = promise1.then((res) => {
//   console.log(res);
// });
// console.log("1", promise1);
// console.log("2", promise2);
// console.log((123)["toString"].length);
// console.log((123).toString.length);
// async function fn() {
//   console.log("1");
//   await new Promise((resolve) => {
//     console.log("2");
//     resolve("3");
//   });
//   console.log("4");
//   return "5";
// }

// fn().then((res) => console.log(res));
// let a = "";
// async function async1() {
//   console.log(" ppp");
//   a = await new Promise((resolve) => {
//     console.log(" llll");
//     resolve("promise resolve");
//     console.log("mmm");
//   });

//   console.log(a);

//   return "123";
// }
// async1();

// console.log("000");
// for (var i = 1; i <= 5; i++) {
//   (function (i) {
//     setTimeout(function timer() {
//       console.log(i);
//     }, 0);
//   })(i);
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout(
//     function timer(j) {
//       console.log(j);
//     },
//     0,
//     i
//   );
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, 0);
// }
// async function async1() {
//   try {
//     await async2();
//   } catch {
//     console.log("async1");
//     return "async1 success";
//   }
// }
// async function async2() {
//   return new Promise((resolve, reject) => {
//     console.log("async2");
//     reject("error");
//   });
// }
// async1().then((res) => console.log(res));

Promise.reject("err!!!")
  .then(
    (res) => {
      console.log("success", res);
    }
    // (err) => {
    //   console.log("error", err);
    // }
  )
  .catch((err) => {
    console.log("catch", err);
  });
