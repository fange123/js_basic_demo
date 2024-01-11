{
  //~ 逻辑OR赋值（x ||=y）运算符仅在 x 为 falsy时赋值。

  // const obj = { name:''}
  // const obj = { name:0}
  const obj = { name: false };
  // const b = obj.name ||= true
  const c = obj.name || true;
  // console.log(b);
  console.log(obj.name);

  console.log(c);
  console.log(obj.name);

  // ~逻辑 AND 赋值 (x &&= y) 运算符仅在 x 为真时赋值。

  console.log("+++++++++++++");

  let a = 1;
  let b = 0;
  a &&= 3;
  b &&= 6;
  console.log(a); //3
  console.log(b); //0

  //~ 逻辑空赋值运算符 (x ??= y) 仅在 x 是 nullish (null 或 undefined) 时对其赋值。
  // !就是??=是赋值，??只是判断逻辑

  let x = undefined;
  let y = null;
  let z = false;
  x ??= 123;
  y ??= 456;
  z ??= Boolean(789);
  console.log(x); //123
  console.log(y); //456
  console.log(z); //false
}
