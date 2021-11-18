{
  const myFun = <T extends string | any[]>(a:T) => {
    //~让范型T继承字符串和数组的属性，字符串和数组都有length属性
    return a.length
  }

  console.log(myFun('12345'))
  console.log(myFun([1,2,3,4,5]))


}
