const { expect } = require('chai');

const weddingDay = {
  pickVenue(capacity, pricePerGuest, location) {
    if (typeof capacity !== 'number' || typeof pricePerGuest !== 'number' || typeof location !== 'string' || location === '') {
      throw new Error("Invalid Information!")
    };
    if (location == "Varna") {

      if (capacity >= 150 && pricePerGuest <= 120) {
        return `This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`;
      } else {
        return `This venue does not meet your requirements!`;
      }
    } else {
      throw new Error(`The location of this venue is not in the correct area!`);
    };
  },

  otherSpendings(weddingDecoration, photography, discount) {
    if (!Array.isArray(weddingDecoration) || !Array.isArray(photography) || typeof discount !== "boolean") {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    weddingDecoration.forEach((decoration) => {
      if (decoration === "flowers") {
        totalPrice += 500
      } else if (decoration === "Fabric drapes and curtains") {
        totalPrice += 400
      }
    });

    photography.forEach((service) => {
      if (service === "pictures") {
        totalPrice += 700
      } else if (service === "video") {
        totalPrice += 1300
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.85;
      return `You spend ${totalPrice}$ for wedding decoration and photography with 15% discount!`
    } else {
      return `You spend ${totalPrice}$ for wedding decoration and photography!`
    }

  }
  ,
  tableDistribution(guests, tables) {
    if (typeof guests !== "number" || guests <= 0 ||
      typeof tables !== "number" || tables <= 0) {
      throw new Error("Invalid Information!");
    }
    let peopleOnTable = Math.round(guests / tables);

    if (peopleOnTable < 6) {
      return `There is only ${peopleOnTable} people on every table, you can join some tables.`
    } else {
      return `You have ${tables} tables with ${peopleOnTable} guests on table.`
    }
  }
}


describe('test weddingDay', function () {

  describe('test PickVenue', () => {

    it('must throw error with invalid input', () => {
      expect(() => weddingDay.pickVenue('', 1, '')).to.throw("Invalid Information!");
      expect(() => weddingDay.pickVenue(1, '', '')).to.throw("Invalid Information!");
      expect(() => weddingDay.pickVenue('', '', 1)).to.throw("Invalid Information!");
      expect(() => weddingDay.pickVenue(1, 1, '')).to.throw("Invalid Information!");

      expect(() => weddingDay.pickVenue(1, 1, 'Burgas')).to.throw("The location of this venue is not in the correct area!");
    })

    it('must return correct answer with vali input', () => {
      expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.")
      expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal("This venue does not meet your requirements!")
      expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal("This venue does not meet your requirements!")
      expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal("This venue does not meet your requirements!")
    })
  })

  describe('test otherSpendings', () => {

    it('must throw error with invalid input', () => {
      expect(() => weddingDay.otherSpendings(1, [], true)).to.throw("Invalid Information!");
      expect(() => weddingDay.otherSpendings([], 1, true)).to.throw("Invalid Information!");
      expect(() => weddingDay.otherSpendings([], [], [])).to.throw("Invalid Information!");
      expect(() => weddingDay.otherSpendings(1, 1, 1)).to.throw("Invalid Information!");
    })

    it('must return correct answer with valid input', () => {
      expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal('You spend 1020$ for wedding decoration and photography with 15% discount!')
      expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!')
    })
  })

  describe('test tableDistribution', () => {
    it('must throw error with invalid input', () => {
      expect(() => weddingDay.tableDistribution('', 1)).to.throw("Invalid Information!");
      expect(() => weddingDay.tableDistribution(1, '')).to.throw("Invalid Information!");
      expect(() => weddingDay.tableDistribution('', '')).to.throw("Invalid Information!");
    })

    it('must return correct answer with valid input', () => {
      expect(weddingDay.tableDistribution(1, 6)).to.equal("There is only 0 people on every table, you can join some tables.")
      expect(weddingDay.tableDistribution(6, 6)).to.equal("There is only 1 people on every table, you can join some tables.")
      expect(weddingDay.tableDistribution(16, 1)).to.equal("You have 1 tables with 16 guests on table.")
    })
  })

})



module.exports = weddingDay;