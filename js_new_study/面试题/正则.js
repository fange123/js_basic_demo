const reg = /[\S]+ZB_[\S]+_ECM[\S]+/;
const str = "1cZB_llll_ECMpppp";
const a = reg.test(str);
console.log(a);
