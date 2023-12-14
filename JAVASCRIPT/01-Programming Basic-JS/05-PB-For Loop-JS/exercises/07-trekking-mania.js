function trekking(input){
    let climbersGroups = Number(input[0]);
    let climbersMusala = 0;
    let climbersMonblan = 0;
    let climbersKilimandjaro = 0;
    let climbersK2 = 0;
    let climbersEverest = 0;

    for(let i = 1; i < climbersGroups +1; i++){
        let climbersCount = Number(input[i]);

        if (climbersCount <= 5){
            climbersMusala += climbersCount;

        } else if (climbersCount <= 12){
            climbersMonblan += climbersCount;

        } else if (climbersCount <= 25){
            climbersKilimandjaro += climbersCount;

        } else if (climbersCount <= 40){
            climbersK2 += climbersCount;

        } else {
            climbersEverest += climbersCount;
        }

    }
    let peopleCount = climbersMusala + climbersMonblan + climbersKilimandjaro + climbersK2 + climbersEverest;
    let musalaPercent = climbersMusala / peopleCount * 100;
    let monblanPercetn = climbersMonblan / peopleCount * 100;
    let kilimandjaroPercent = climbersKilimandjaro / peopleCount * 100;
    let k2Percent = climbersK2 / peopleCount * 100;
    let everestPercent = climbersEverest / peopleCount * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercetn.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

}







trekking(["5",
"25",
"41",
"31",
"250",
"6"])

