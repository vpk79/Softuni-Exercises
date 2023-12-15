function amazingNumbers(num){
let buffer = Math.abs(num);
let sum = 0;
let sum2 = 0;
let amazing = false;

while(buffer > 0){
    sum += buffer % 10;
    buffer = Math.trunc(buffer / 10);
}

while(sum > 0){
    sum2 = sum % 10;
    
        if(sum2 === 9){
            amazing = true;
            break;
        } else {
            sum = Math.trunc(sum / 10);
            }
    }

    if(amazing){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}



amazingNumbers(1233)
amazingNumbers(999)