const Persiapan = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Persiapan.....")
        },3000)
    })
}

const RebusAir = ()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Rebus Air.....")
        },7000)
    })
}

const Masak = ()=> { 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Masak Mie....")
        },5000)
    })
}

const Main = async ()=>{
     console.log(await Persiapan());
     console.log(await RebusAir());
     console.log(await Masak());
}


Main();
