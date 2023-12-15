function evenAndOddSubs(arr){
    let even = 0;
    let odd = 0;

    for(let i = 0; i < arr.length; i++){
        let num = Number(arr[i]);
        if(num % 2 == 0){
            even += num;
        }else{
            odd += num;
        }
    }
    let diff = even - odd;
    console.log(diff);
}



evenAndOddSubs([1,2,3,4,5,6]) 