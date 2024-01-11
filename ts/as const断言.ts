{
  //TODO:as const 是根据值判断类型

  const a: string = "zhy";
  const b: number = 120;
  const c = "哈哈" as const;

  const d = [a, b, c] as const;

  let e = d[2];
  let f = d[1];
  let g = d[0];
  e = "哈哈"; //e只能是哈哈
  f = 20; //f只能是number类型
  g = "20"; //g只能是string类型

  //!as const 还可以这样写：
  const d1 = <const>[a, b, c];

  //?断言就是我说了算，ts推断的类型可能不准确
}
