// 2.
for(fac = 1; fac<=4; fac++){
    number = 1
    if (fac==0 || fac==1) {
        console.log(`factorial of ${fac} is ${number}`)
    }else{
        for(var i = fac; i>= 1; i--){
            number = number*i
        }
        console.log(` factorial of ${fac} is ${number}`)
    }
}


//1.