function sumNumbers(input){
    
    let index = 0;
    let num = Number(input[index]);
    index++;
    let nextnum = Number(input[index]);
    index++;
    let sum = 0;

    while(sum < num){

        sum += nextnum;
        if(sum >= num){
            break;
        }
        nextnum = Number(input[index]);
        index++;

    }

    console.log(sum);


}







sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
