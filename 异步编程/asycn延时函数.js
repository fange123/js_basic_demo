function sleep(delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function show() {
  for (const num of [1, 2, 3, 4]) {
    await sleep();
    console.log(num);
  }
}

show();
