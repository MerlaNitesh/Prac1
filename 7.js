// let fruits=['apple','banana','orange','pineapple'];
// let [first,second]=fruits;
// console.log(first);
// console.log(second);
// const [third,,,five]=fruits;
// console.log(third);
// console.log(five);
// const [six,...rest]=fruits;
// console.log(six);
// console.log(rest)
const a=
{
    name:'Nitesh',
    age:20,
    hobbies:"Movies",
    studies:{
        college:"cvr"
    }
}
const {name,age,hobbies,studies:{college}}=a;
const b={
    a,
    habits:"good"
};
console.log(b);