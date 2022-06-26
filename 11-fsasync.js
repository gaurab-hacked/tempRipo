const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err, res)=>{
    if(err){
        console.log('sorry');
    }
    const first = res;
    console.log(res);
    readFile('./content/second.txt','utf8',(err, res)=>{
        if(err){
            console.log("file not found");
        }
        else{
            const second = res;
            writeFile('./content/result-async.txt','this is result file async',(err,res)=>{
                console.log(res);
            });
        }
    })
})