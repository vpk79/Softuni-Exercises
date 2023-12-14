function exam(input){
    let = students = Number(input[0]);



    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;

    let valueSum = 0;

    for(let i = 1; i <= students; i++){
        let value = Number(input[i])
        valueSum += value;

        if(value <= 2.99){
            counter1++;
        } else if(value <= 3.99){
            counter2++;
        } else if(value <= 4.99){
            counter3++;
        }else{
            counter4++;
        }
    }

    let avgValue = valueSum / students;
    let group1 = counter1 / students * 100;
    let group2 = counter2 / students * 100;
    let group3 = counter3 / students * 100;
    let group4 = counter4 / students * 100;

    console.log(`Top students: ${group4.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group3.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group2.toFixed(2)}%`);
    console.log(`Fail: ${group1.toFixed(2)}%`);
    console.log(`Average: ${avgValue.toFixed(2)}`);
}



exam([
"10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
