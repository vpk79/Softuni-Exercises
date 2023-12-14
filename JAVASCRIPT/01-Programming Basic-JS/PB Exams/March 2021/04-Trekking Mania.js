function trekking(input){
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;


    for(let i = 1; i <= groups; i++){
        let people = Number(input[i]);

        if(people <=5){
            musala += people;
        } else if(people <= 12){
            monblan += people;
        } else if(people <= 25){
            kilimandjaro += people;
        } else if(people <= 40){
            k2 += people;
        }else{
            everest += people;
        }

    }

    let allPeople = musala + monblan + kilimandjaro + k2 + everest;
    let musalaPercent = musala / allPeople * 100;
    let monblanPercent = monblan / allPeople * 100;
    let kilimandjaroPercent = kilimandjaro / allPeople * 100;
    let k2Percent = k2 / allPeople * 100;
    let everestPercent = everest / allPeople * 100;

    console.log(musalaPercent.toFixed(2)+"%");
    console.log(monblanPercent.toFixed(2)+"%");
    console.log(kilimandjaroPercent.toFixed(2)+"%");
    console.log(k2Percent.toFixed(2)+"%");
    console.log(everestPercent.toFixed(2)+"%");

}



trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
