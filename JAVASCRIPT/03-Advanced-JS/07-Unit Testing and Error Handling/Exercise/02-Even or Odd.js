const {expect} = require('chai');

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}



describe('isEvenOrOdd', function(){
    it('return undefined if value is a number', ()=>{
        expect(isOddOrEven(1)).to.be.undefined;
    })

    it('return undefined if value is boolean', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    })

    it('return even if value length is even', () => {
        expect(isOddOrEven('dada')).to.equal('even');
    })

    it('return odd if value length is even', () => {
        expect(isOddOrEven('dad')).to.equal('odd');
    })

    it('testing with variable strings', () => {
        expect(isOddOrEven('12345')).to.equal('odd');
    })

    it('testing with variable strings', () => {
        expect(isOddOrEven('true')).to.equal('even');
    })

})