const { expect } = require('chai');

const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }

    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;

    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }

    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};


describe('tests', function () {

  describe('test buyLotteryTicket', () => {

    it('must throw error with invalid input', () => {
      expect(() => lottery.buyLotteryTicket('', 1, true)).to.throw("Invalid input!");
      expect(() => lottery.buyLotteryTicket(1, '', true)).to.throw("Invalid input!");
      expect(() => lottery.buyLotteryTicket(1, 1, '')).to.throw("Invalid input!");
      expect(() => lottery.buyLotteryTicket('', '', '')).to.throw("Invalid input!");
      expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw("Invalid input!");
      expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw("Invalid input!");

      expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw("Unable to buy lottery ticket!");
    })

    it('must return correct answer with valid input', () => {
      expect(lottery.buyLotteryTicket(1, 1, true)).to.equal("You bought 1 tickets for 1$.")
    })
  })

  describe('test checkTicket', () => {

    it('must throw error with invalid input', () => { 
      expect(()=> lottery.checkTicket(1,[])).to.throw('Invalid input!');
      expect(()=> lottery.checkTicket([],1)).to.throw('Invalid input!');
      expect(()=> lottery.checkTicket(1,1)).to.throw('Invalid input!');
      expect(()=> lottery.checkTicket([],[])).to.throw('Invalid input!');
      expect(()=> lottery.checkTicket([],[1,1,1,1,1,1])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket([1, 1, 1, 1, 1, 1],[])).to.throw('Invalid input!');
    })

    it('must return correct answer with valid input', ()=>{
      expect(lottery.checkTicket([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5])).to.equal('You win the JACKPOT!!!');
      expect(lottery.checkTicket([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 1, 2])).to.equal('Congratulations you win, check your reward!');
    })

  })

  describe('test	secondChance', ()=>{

    it('must throw error with invalid input', () => {
      expect(() => lottery.secondChance('', [])).to.throw('Invalid input!');
      expect(() => lottery.secondChance(1, '')).to.throw('Invalid input!');
      expect(() => lottery.secondChance('', '')).to.throw('Invalid input!');
    })

    it('must return correct answer with valid input', ()=>{
      expect(lottery.secondChance(1, [1])).to.equal("You win our second chance prize!");
      expect(lottery.secondChance(1, [2])).to.equal("Sorry, your ticket didn't win!");
    })
  })
})


module.exports = lottery;