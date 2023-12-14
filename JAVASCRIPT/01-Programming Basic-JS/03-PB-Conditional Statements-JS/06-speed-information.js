function speed(input){
    let value = Number(input[0]);
    if (value <= 10){
        console.log("slow");
    } else if (value > 10 && value <= 50){
        console.log("average");

    } else if (value > 50 && value <= 150){
        console.log("fast");
    } else if (value > 150 && value <= 1000){
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}


speed(["49.5"]);