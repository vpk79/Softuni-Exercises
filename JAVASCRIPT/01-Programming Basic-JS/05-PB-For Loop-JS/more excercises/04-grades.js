function grades(input){
    let studentsCount = Number(input[0]);
    let stdValueOver2 = 0;
    let stdValueOver3 = 0;
    let stdValueOver4 = 0;
    let stdValueOver5 = 0;
    let valueSum = 0;

    for(let i = 1; i < studentsCount + 1; i++){
        let value = Number(input[i]);
        valueSum += value;

        if(value <= 2.99){
            stdValueOver2 ++;
        } else if (value <= 3.99){
            stdValueOver3 ++;
        } else if (value <= 4.99){
            stdValueOver4 ++;
        } else {
            stdValueOver5 ++;
        }
    }

    let avgValueSum = valueSum / studentsCount;
    let stdOver2Percent = stdValueOver2 / studentsCount * 100;
    let stdOver3Percent = stdValueOver3 / studentsCount * 100;
    let stdOver4Percent = stdValueOver4 / studentsCount * 100;
    let stdOver5Percent = stdValueOver5 / studentsCount * 100;


    console.log(`Top students: ${stdOver5Percent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${stdOver4Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${stdOver3Percent.toFixed(2)}%`);
    console.log(`Fail: ${stdOver2Percent.toFixed(2)}%`);
    console.log(`Average: ${avgValueSum.toFixed(2)}`);

}





grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])