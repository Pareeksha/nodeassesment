let p = new Promise((resolve, reject) => {
    let sum = 4+4
    if(sum==8){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
})
p.then((message)=>{
    console.log('This is then statement "'+ message +'"')
}).catch((message)=> {
    console.log('This is catch statement "'+ message +'"')
})