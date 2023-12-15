function solve(input){

    let garages = [];

    for(let line of input){
        let lineArray = line.split(/[-,:]/).map(x => x.trim());
        let garageNumber = lineArray.shift()

        if (!garages.find(x => x.get('number') == garageNumber)) {
            garages.push(new Map([['number', garageNumber], ['cars', []]]))
        }

        let newCar = new Map();

        for(let i = 0; i < lineArray.length; i+=2){
            property = lineArray[i];
            value = lineArray[i+1];
            newCar.set(property, value);
        }

        let pickGarage = garages.find(x => x.get('number') == garageNumber);

        pickGarage.get('cars').push(newCar);
    }

    for(let object of garages){

        console.log(`Garage № ${object.get('number')}`);

        let car = object.get('cars');

            for(let map of car){
                let carTypes = "--- ";

                for(let [key, value] of map){
                    carTypes += `${key} - ${value}, `
                }
                carTypes = carTypes.slice(0, -2)
                console.log(carTypes);
            }
    }
}





// solve([
// '1 - color: blue, fuel type: diesel',
// '1 - color: red, manufacture: Audi',
// '2 - fuel type: petrol',
// '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])



solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV', 
'2 - fuel type: diesel', 
'3 - color: dark blue, fuel type: petrol'])