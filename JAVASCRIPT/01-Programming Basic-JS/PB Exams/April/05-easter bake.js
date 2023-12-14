function easterBake(input){
    let index = 0;
    let cakes = Number(input[index]);
    index++;
    let counter = 0;
    let wastedSugar = 0;
    let wastedFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    while(counter < cakes){
        wastedSugar += Number(input[index]);
        if(Number(input[index]) > maxSugar){
            maxSugar = Number(input[index])
        }
        index++;
        wastedFlour += Number(input[index]);
        if(Number(input[index]) > maxFlour){
            maxFlour = Number(input[index])
        }

        index++;
        counter++;
    }

    let sugarPackages = Math.ceil(wastedSugar / 950);
    let flourPackages = Math.ceil(wastedFlour / 750);

    console.log(`Sugar: ${sugarPackages}`);
    console.log(`Flour: ${flourPackages}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}










easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

