function triangle(num){
    let buff = ""
    for(let i = 1; i <= num; i++){
         buff = "";
        for(let j = 0; j < i; j++){
           buff  += i + " "
            
        }
        console.log(buff);
    }

   
}


triangle(5)