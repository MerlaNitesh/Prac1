const a= Symbol('desc')
const obj={
    [a]:"This is a var"
}
console.log(obj[a]);
const b=Symbol('desc')
console.log(a==b);