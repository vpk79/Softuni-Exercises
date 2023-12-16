function solve(input){

    let towns = {};

    for(let line of input){
        let [town, population] = line.split(" <-> ");
        population = Number(population);
        if(towns[town]){
            towns[town] += population
        } else{
            towns[town] = population;
        }
        
    }

    for(let [town, population] of Object.entries(towns)){
        console.log(`${town} : ${population}`);
    }
}




solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])