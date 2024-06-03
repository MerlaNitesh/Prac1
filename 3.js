function* fibonacci()
{
   let [f1,f2]=[0,1];
    while(true)
        {
            yield f1;
            [f1,f2]=[f2,f1+f2];
        }

}
let obj=fibonacci();
for(let i=0;i<10;i++)
    console.log(obj.next().value)