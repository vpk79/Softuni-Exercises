
const {expect} = require('chai');


let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};




describe('mathEnforcer', function(){
    describe('addFive', function(){
        it('should return undefined with non-number parameter', ()=>{
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        })

        it('should return correct result with number', ()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })

        it('should return correct result with floating-point', () => {
            expect(mathEnforcer.addFive(0.3)).to.equal(5.3);
        })

        it('should return correct result with negative number', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })

    })

    describe('subtractTen', function(){
        it('should return undefined with non-number parameter', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        })

        it('should return correct result with positive number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })

        it('should return correct result with negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })

        it('should return correct result with floating-point number', () => {
            expect(mathEnforcer.subtractTen(-0.2)).to.equal(-10.2);
        })

    })   

    describe('sum', function(){
        it('should return undefined with first non-number parameter', () => {
            expect(mathEnforcer.sum('1', 2)).to.be.undefined;
        })

        it('should return undefined with second non-number parameter', () => {
            expect(mathEnforcer.sum(1, '2')).to.be.undefined;
        })

        it('should return correct result with number', () => {
            expect(mathEnforcer.sum(0, 5)).to.equal(5);
        })

        it('should return correct result with floating-point', () => {
            expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
        })

        it('should return correct result with negative number', () => {
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
        })
    })

})
