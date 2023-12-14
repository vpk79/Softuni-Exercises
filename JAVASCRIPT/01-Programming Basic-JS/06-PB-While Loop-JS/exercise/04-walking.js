function walking(input){
    let index = 0;
    
    let command = input[index];
    let stepsSum = 0;

    while(command !== "Going home"){
        let steps = Number(input[index]);
        index++;
        command = input[index];

        stepsSum += steps;

        if(stepsSum >= 10000){
            stepsSum -=10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum} steps over the goal!`);
            break;
        }

               
    }
    if(command){
        index++;
        let goHomeSteps = Number(input[index]);
        stepsSum = stepsSum + goHomeSteps;
        if(stepsSum >= 10000){
            stepsSum -=10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum} steps over the goal!`);
           
        } else{
            stepsSum = 10000 - stepsSum;
        console.log(`${stepsSum} more steps to reach goal.`);
        }
    }

}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
