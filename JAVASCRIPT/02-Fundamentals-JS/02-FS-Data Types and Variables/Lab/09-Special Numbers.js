function specialNumber(num){
    

   for(let i = 1; i <= num; i++){
    let sum = 0;
    let n = i;
        while(n > 0){
            sum += n % 10;
            
            n = parseInt(n / 10);
        }
        sum === 5 || sum === 7 || sum === 11 ? console.log(`${i} -> True`) : console.log(`${i} -> False`);

    }
}


specialNumber(15)