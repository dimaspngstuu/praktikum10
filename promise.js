const download= ()=> {
    return new Promise(function(resolve,reject){

        const status = false;
    
        setTimeout(()=>{
            if(status){
                resolve("download selesai");
            }else{
                reject("download gagal");
            }
        
        },5000)
      
    });
} 

download()
.then(function(result){
    console.log(result)
})
.catch((result)=>{
    console.log(result)
});








