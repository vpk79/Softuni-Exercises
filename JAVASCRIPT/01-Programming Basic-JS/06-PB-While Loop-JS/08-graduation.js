function graduation(input){
    let index = 0;
    let studentName = input[index];
    index++;
    let score = Number(input[index]);
    let resign = 0;
    let valuationSum = 0;

    while(index <= 12){

        if(score < 4){

            resign++;

            if(resign > 1){
                console.log(`${studentName} has been excluded at ${index} grade`);
                break;
            }
            continue;
        }
        valuationSum += score;
        index++;
        score = Number(input[index]);

    }

    if(resign < 2){
    console.log(`${studentName} graduated. Average grade: ${(valuationSum / 12).toFixed(2)}`);
    }

}










graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
