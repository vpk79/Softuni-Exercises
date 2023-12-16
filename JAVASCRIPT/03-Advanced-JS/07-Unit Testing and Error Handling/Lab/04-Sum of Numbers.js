const { expect } = require('chai');


function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

console.log(sum([]))


describe('Tests', function(){
    it('test1', () => {
       expect(sum([3,5])).to.equal(8);
    })
    it('test2', () => {
        expect(sum([0, 7])).not.to.equal(8);
    })
    it('test3', () => {
        expect(() => (sum(5))).to.throw('arr is not iterable');
    })

    it('test4', () =>{
        expect(sum([NaN, '8'])).to.be.NaN;
    })

    it('test5', () => {
        expect(sum([])).to.equal(0);
    })

})