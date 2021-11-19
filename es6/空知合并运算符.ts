// 空值合并操作符（ ?? ）是一个逻辑操作符，
// 当左侧的操作数为 null 或者 undefined 时，
// 返回其右侧操作数，否则返回左侧操作数。
const my = null ?? '123'
const my1 = undefined ?? '123'

// 如果左侧给的入参是false 、0、‘’这些假值，都会返回右侧的默认值
const my2 = false ?? '123'
console.log(my);//123
console.log(my1);//123
console.log(my2);//false
console.log("---------------");


//和短路有点点区别
const my3 = null || '123'
const my4 = undefined || '123'
const my5 = false || '123'
const my6 = 0 || '123'
const my7 = "" || '123'


console.log(my3)
console.log(my4)
console.log(my5)
console.log(my6)
console.log(my7)
