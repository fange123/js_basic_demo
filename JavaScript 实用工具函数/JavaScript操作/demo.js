const a = [
  {
    key: "cjzqTypes",
    title: "场景专区",
    label: ["数字沙盘"],
    code: ["20221202001"],
  },
  {
    key: "cataLogtypes",
    title: "资产类型",
    label: ["指标表", "发展类", "使用类"],
    code: ["20230103000", "20221128006", "20221128007"],
  },
  {
    key: "classSource",
    title: "来源分类",
    label: ["M域"],
    code: ["20220925012"],
  },
  {
    key: "classSource",
    title: "来源分类",
    label: ["M域"],
    code: [],
  },
];

const b = a.filter((i) => i.code.length);
console.log(b);
