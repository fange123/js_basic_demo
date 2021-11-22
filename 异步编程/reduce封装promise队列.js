function query(num) {
  num.reduce((promise, c) => {
    return promise.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          console.log(c);
        }, 1000);
      });
    });
  }, Promise.resolve());
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
query(arr);
