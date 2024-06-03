let photos=[];
async function upload()
{
    let a = new Promise((resolve,reject)=>
    {
        photos.push("Upload");
        resolve("Success")
    })
    let result = await a;
    console.log(result);
    console.log(photos.length);
};
upload();