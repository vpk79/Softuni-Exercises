function formatGrade(grade){
    let value = "";

    if(grade < 3.00){
        value =  "Fail (2)";
    } else if (grade < 3.50){
        value = "Poor";
    } else if (grade < 4.50){
        value = "Good";
    } else if(grade < 5.50){
        value = "Very good";
    } else {
        value = "Excellent";
    }

    if(grade >= 3){
        console.log(`${value} (${grade.toFixed(2)})`);
    } else {
        console.log(`${value}`);
    }
    
}



formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99 )