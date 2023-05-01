let date =new Date();
// console.log(date);
// console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getFullYear())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getSeconds())
console.log(date.getMinutes())

console.log(date.setHours(5))
// console.log(date.getDay())

// One More MEthod to Create Clock:
let a=new Date()
let b=a.getDate()
let c=a.getHours()
let d=a.getMinutes()
let e=a.getSeconds()
// let f=a.getFullYear()
document.write(b,c,d,e)
console.log(b,c,d,e)