function foodForPets(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let dogFood = 0;
    let catFood = 0;
    let bisquits = 0;
    let dayCounter = 0;

    for (let i = 2; i < days * 2 + 2; i += 2) {
        dogFood += Number(input[i]);
        catFood += Number(input[i + 1]);

        ++dayCounter;

        if (dayCounter % 3 == 0) {
            bisquits += (Number(input[i]) + Number(input[i + 1])) * 0.1
        }

    }

    let allEatenFood = dogFood + catFood;
    let allEatenFoodPercent = (allEatenFood / totalFood) * 100

    let dogEatenFood = dogFood / allEatenFood * 100;
    let catEatenFood = catFood / allEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(bisquits)}gr.`);
    console.log(`${allEatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenFood.toFixed(2)}% eaten from the cat.`);

}




foodForPets([
    "3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])

    foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);