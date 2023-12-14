function easterEggs(input){
    let index = 0;
    let paintedEggs = Number(input[index]);
    index++;
    let counter = 0;
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxEggs = 0;
    let color = "";

    while(counter < paintedEggs){
        color = input[index]
        switch(color){
            case "red": red++; break;
            case "orange": orange++; break;
            case "blue": blue++; break;
            case "green": green++; break;
        }
        index++;
        counter++;
    }
    if(red > orange && red > blue && red > green){
        maxEggs = red;
        color = "red";
    } else if (orange > red && orange > blue && orange > green){
        maxEggs = orange;
        color = "orange";
    } else if (blue > red && blue > orange && blue > green){
        maxEggs = blue;
        color = "blue";
    } else{
        maxEggs = green;
        color = "green";

    }

    

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${color}`);
}   







easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) 

