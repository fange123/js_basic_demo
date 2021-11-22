function query(arr) {
  let promise = Promise.resolve();
  arr.map((v) => {
    promise = promise.then((_) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(v);
          console.log(v);
        }, 1000);
      });
    });
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
query(arr);
