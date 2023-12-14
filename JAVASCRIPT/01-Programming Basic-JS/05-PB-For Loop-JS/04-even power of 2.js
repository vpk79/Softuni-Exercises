function evenPowerOf2(input){
    let num = Number(input[0]);
    let even = 0;
    for(let i = 0; i <= num; i++){
        if(i % 2 == 0){
            even = 2 ** i;
            console.log(even);
        }
       
    }
}



evenPowerOf2(["6"]);