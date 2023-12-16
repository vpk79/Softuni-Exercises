function cityTaxes(name, population, treasury) {

    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100))
        },
        applyRecession(percentage) {
            Math.floor(this.treasury *= ((100 - percentage) / 100))
        },
    }

    return result;

}



// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);


// solve('Tortuga',
//     7000,
// //     15000)

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);
// city.applyRecession(15);
// console.log(city.treasury);


const city = cityTaxes('Sofia', 2000000, 1000000);

console.log(city);

//testing if all the properties are correct
// expect(city.name).to.be.equal('Sofia', 'The name of the city is incorrect');
// expect(city.population).to.be.equal(2000000, 'The city.population is incorrect');
// expect(city.treasury).to.be.equal(1000000, 'The city.treasury is incorrect');
// expect(city.taxRate).to.be.equal(10, 'The city.taxRate is incorrect');