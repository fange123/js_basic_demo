function my(){
  const a:string = 'zhy'
  const b = (x:number,y:number):number=> {
    return x+y
  }
    return [a,b]
}

//此时my函数的返回值是string | ((x: number, y: number) => number))[]
//如果解构
let [m,n] = my()
//那么m,n的类型不明确啊
m(10,20)//就报错啊
//所以，必须确定类型，m就是字符串，n就是函数
//~可以这么写
let [x,y] = my() as [string,Function]
y(20,10)

//~也可以这么写
let [q ,w] = my();
(q as Function)(10,20)

//~也可以写的更明确类型

let [o,p] = my() as [string,(a:number,b:number)=>number];
p(10,20)

//*也可以在函数体内返回的时候就规定
function my1(){
   const a:string = 'zhy'
  const b = (x:number,y:number):number=> {
    return x+y
  }
    // return [a,b] as [typeof a,typeof b]
    return [a,b] as const
}

let [k,l]  =my1()
k='nnn'
l(10,20)



