function theLift(input){
    let people = Number(input[0]);
    let lift = input[1].split(" ").map(x => Number(x))

    for(let i = 0; i < lift.length; i++){
        let cabin = lift[i];
        let places = 0;

        if(4 - cabin > 0){
            places = 4 - cabin;

            if(people - places >= 0){
                people -= places;
                lift[i] += places;
            } else {
                lift[i] += people;
                people -= places;
                break;
            }
        } 
    }

    if(people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(" "));
    } else if(people < 0 ){
        console.log("The lift has empty spots!");
        console.log(lift.join(" "));
    } else{
        console.log(lift.join(" "));
    }
}


// theLift([
//     "15",
//     "0 0 0 0 0"
//    ]
//    )

// theLift([
//     "20",
//     "0 2 0"
//    ]
//    )

theLift([
    "6",
    "2 2 2"
   ]
   )