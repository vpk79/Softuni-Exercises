function  vacation(input){
    let vacationPrice = Number(input[0]);
    let puzzles = Number(input[1]) * 2.60;
    let talkingPuppets = Number(input[2]) * 3;
    let flappyBear = Number(input[3]) * 4.10;
    let minnion = Number(input[4]) * 8.20;
    let truck = Number(input[5]) * 2;
    let toysCount = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);
    let toysPrice = puzzles + talkingPuppets + flappyBear + minnion + truck;
    let discount = 0;

    if (toysCount >= 50){
        discount = toysPrice * 0.25;
    }
    let money = toysPrice - discount;
    let totalMoney = money - (money * 0.1);

    if (totalMoney >= vacationPrice){
        let moneyLeft = totalMoney - vacationPrice;
       
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyLeft = vacationPrice - totalMoney;
       
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    }





}



vacation(["320", "8", "2", "5", "5", "1"])