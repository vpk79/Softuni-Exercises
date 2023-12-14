function negativeNumber(input){
   let number = input.length

   let a = 0;

   while(a < (number) ){
    let num = Number(input[a]);
    if(num >= 0){
        console.log(`Result: ${(num * 2).toFixed(2)}`);
    } else {
        console.log("Negative number!");
        break;
    }
    a++;
   }

}


negativeNumber(["12", "43.2144", "12.3", "543.23", "-20"])