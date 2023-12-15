function heartDelivery(input){
    let houses = input.shift().split("@");
    let cupidPosition = 0;

    for(let sentence of input){
        if(sentence === 'Love!'){
            break;
        }

        let array = sentence.split(" ");
        let [command, distance] = array;
        distance = Number(distance);

        if(command === 'Jump'){
            cupidPosition += distance;
            if(houses[cupidPosition] == undefined){
                cupidPosition = 0;
            }

            if(houses[cupidPosition] <= 0){
                console.log(`Place ${cupidPosition} already had Valentine's day.`);
                continue;
            }

            houses[cupidPosition] -= 2;

            if(houses[cupidPosition] <= 0) {
                console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${cupidPosition}.`);
    
    let valentines = houses.filter(x => x > 0);

    if(valentines.length == 0){
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${valentines.length} places.`);
    }
    
}


// heartDelivery([
// "10@10@10@2",
// "Jump 1",
// "Jump 2",
// "Love!"])

heartDelivery((["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
)
