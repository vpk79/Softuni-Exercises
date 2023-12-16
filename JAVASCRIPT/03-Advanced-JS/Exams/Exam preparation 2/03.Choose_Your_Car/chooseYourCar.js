const { expect } = require('chai');

const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {

                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(`This type of car is not what you are looking for.`);
        }
    },

    brandName(brands, brandIndex) {

        let result = [];

        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm = ((consumptedFuelInLiters / distanceInKilometers) * 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}



describe('main', function () {

    describe('test choosingType', () => {
        it('it should not throw error with valid year', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2000)).not.to.throw('Invalid Year!');
        })

        it('it hsould throw error if year is invalid', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2300)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1300)).to.throw('Invalid Year!');
        })

        it('it should not throw error with valid type', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2000)).not.to.throw('This type of car is not what you are looking for.')

        })

        it('it should throw error with invalid type', () => {
            expect(() => chooseYourCar.choosingType('Sedannnn', 'red', 2000)).to.throw('This type of car is not what you are looking for.')

        })

        it('it should return correct message if year is 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal(`This red Sedan meets the requirements, that you have.`)
        })

        it('it should return correct message if year is under 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal("This Sedan is too old for you, especially with that red color.")
        })
    })

    describe('testing BrandName', () => {
        it('should return correct data', () => {
            expect(chooseYourCar.brandName(['BMW', 'Mazda', 'Audi'], 1)).to.equal('BMW, Audi');
        })

        it('should throw an error with incorrect array', () => {
            expect(() => chooseYourCar.brandName('Mazda', 1)).to.throw("Invalid Information!");
        })

      
        it('should throw an error with incorrect index type', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Mazda', 'Audi'], 'hi')).to.throw("Invalid Information!");
        })

        it('should throw an error with incorrect index range', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Mazda', 'Audi'], 8)).to.throw("Invalid Information!");
        })

        it('should throw an error with incorrect index range', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Mazda', 'Audi'], -1)).to.throw("Invalid Information!");
        })
        it('should throw an error with incorrect index range', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Mazda', 'Audi'], -5.5)).to.throw("Invalid Information!");
        })

    })

    describe('testing CarFuelConsumption', () => {
        it('should return correct answer', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
        })

        it('should return correct answer', () => {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal("The car burns too much fuel - 10.00 liters!")
        })

        it('should return correct answer', () => {
            expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal("The car burns too much fuel - 10.00 liters!")
        })

        it('should return correct answer', () => {
            expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.")
        })

        it('should throw error with incorrect data', () => {
            expect(() => chooseYourCar.carFuelConsumption('hahaha', 10)).to.throw("Invalid Information!");
        })

        it('should throw error with incorrect data', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, 'hahaah')).to.throw("Invalid Information!");
        })

        it('should throw error with incorrect data', () => {
            expect(() => chooseYourCar.carFuelConsumption('hahahah', 'hahaah')).to.throw("Invalid Information!");
        }) 

        it('should throw error with incorrect data', () => {
            expect(() => chooseYourCar.carFuelConsumption(-10, 10)).to.throw("Invalid Information!");
        })

        it('should throw error with incorrect data', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 10)).to.throw("Invalid Information!");
        })

        it('should throw error with incorrect data', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, -10)).to.throw("Invalid Information!");
        })
    })

})
