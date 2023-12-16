const { expect } = require('chai')

const movieTheater = {
  ageRestrictions(movieRating) {
    switch (movieRating) {
      case "G":
        return "All ages admitted to watch the movie";
      case "PG":
        return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
      case "R":
        return "Restricted! Under 17 requires accompanying parent or adult guardian";
      case "NC-17":
        return "No one under 17 admitted to watch the movie";
      default:
        return "There are no age restrictions for this movie";
    }
  },
  moneySpent(tickets, food, drinks) {
    if (
      typeof tickets !== "number" ||
      !Array.isArray(food) ||
      !Array.isArray(drinks)
    ) {
      throw new Error("Invalid input");
    }

    let bill = 0;

    bill += tickets * 15;

    food.forEach((element) => {
      switch (element) {
        case "Nachos":
          bill += 6;
          break;
        case "Popcorn":
          bill += 4.5;
          break;
      }
    });

    drinks.forEach((element) => {
      switch (element) {
        case "Soda":
          bill += 2.5;
          break;
        case "Water":
          bill += 1.5;
          break;
      }
    });

    if (bill > 50) {
      bill -= bill * 0.2;
      return `The total cost for the purchase with applied discount is ${bill.toFixed(
        2
      )}`;
    } else {
      return `The total cost for the purchase is ${bill.toFixed(2)}`;
    }
  },
  reservation(rowsArray, neededSeatsCount) {
    if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
      throw new Error("Invalid input");
    }

    let availableRows = [];
    rowsArray.forEach((row) => {
      if (row.freeSeats >= neededSeatsCount) {
        availableRows.push(row.rowNumber);
      }
    });

    return Math.max(...availableRows);
  },
};




describe('Unit Tests', function () {

  describe('test ageRestrictions', () => {

    it('must return correct answers', () => {
      expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
      expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
      expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
      expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
      expect(movieTheater.ageRestrictions('')).to.equal(`There are no age restrictions for this movie`);
    })
  })

  describe('test moneySpent', () => {

    it('validate wrong input', () => {
      expect(() => movieTheater.moneySpent('0', [], [])).to.throw('Invalid input');
      expect(() => movieTheater.moneySpent(0, 0, [])).to.throw('Invalid input');
      expect(() => movieTheater.moneySpent(0, [], 0)).to.throw('Invalid input');
      expect(() => movieTheater.moneySpent('0', 0, 0)).to.throw('Invalid input');
    })
    it('validate correct input', () => {
      expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 23.50`)
      expect(movieTheater.moneySpent(1, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase is 21.00`)
      expect(movieTheater.moneySpent(10, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 124.80`)
    })

  })

  describe('test reservation', () => {

    it('test for wrong input', () => {
      expect(() => movieTheater.reservation(1, 1)).to.throw('Invalid input');
      expect(() => movieTheater.reservation([], '1')).to.throw('Invalid input');
      expect(() => movieTheater.reservation(1, '1')).to.throw('Invalid input');

    })

    it('test for correct input', ()=>{
      expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 1)).to.equal(1)
      expect(movieTheater.reservation([{ rowNumber: 10, freeSeats: 7 }], 5)).to.equal(10)
      expect(movieTheater.reservation([{ rowNumber: 0, freeSeats: 7 }], 0)).to.equal(0)
    })

  })

})