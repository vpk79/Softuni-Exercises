function easterCake(input){

    let index = 0;
    let easterCakes = Number(input[index]);
    index++;
    let chefName = input[index];
    index++;

    let counter = 0;
    let value = 0;
    let highValue = 0;
    let bestChef = "";


    while(counter < easterCakes){
        let text = input[index];

        if(text !=="Stop"){
            value += Number(input[index])
        } else{
            console.log(`${chefName} has ${value} points.`);
            if(value > highValue){
                highValue = value;
                bestChef = chefName;
                console.log(`${chefName} is the new number 1!`);
            }
            value = 0;
            index++;
            chefName = input[index];
            counter++;
        }

        index++;

    }

    console.log(`${bestChef} won competition with ${highValue} points!`);

}



easterCake(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
