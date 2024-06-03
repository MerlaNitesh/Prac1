import fs from 'fs'
// fs.readFile('input.txt',(err,data)=>
// {
//     if(err)
//         {
//             console.err("error while reading file");
//             return;
//         }
//     fs.writeFile('output.txt',data,'utf8',(err)=>
//     {
//         if(err)
//             {
//                 console.err("error while redaing file");
//                 return;
//             }
//             console.log("file copied");
//     })
// })
const read=fs.readFileSync("input.txt","utf8");
fs.writeFileSync("output.txt",read);
console.log("file copied");