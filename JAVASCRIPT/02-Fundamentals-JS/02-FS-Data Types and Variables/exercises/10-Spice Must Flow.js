function spiceMustFlow(yield){

    let days = 0;
    let storage = 0;
    let minnersCut = 26;

    while (yield >= 100){

        storage += yield - minnersCut;

        yield -= 10;
        days++;
    }
    if(storage >= minnersCut){
        storage -= minnersCut;
    }
    
    console.log(days);
    console.log(storage);
}


spiceMustFlow(450)