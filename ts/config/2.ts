let num:number = 10
let str:string = 'zhy'

// num = str
num = str as unknown as number


let zhy:string = '张海玉'
let my:unknown = 99

// zhy = my//报错，类型不匹配

zhy = my as string



