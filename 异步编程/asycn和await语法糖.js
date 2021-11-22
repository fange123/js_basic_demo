async function my() {
  let first = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve("第一");
    }, 2000);
  });
  let second = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve(first + "第二");
    }, 1000);
  });
  console.log(second);
}
//~await相当于.then

my();
