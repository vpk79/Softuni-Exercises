const {expect} = require('chai');


function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}


describe('lookupChar', function(){
    it('return undefined on invalid string', ()=>{
        expect(lookupChar(2,2)).to.be.undefined;
    })

    it('return undefined on invalid index', () => {
        expect(lookupChar('abc', 0.5)).to.be.undefined;
    })

    it('throw error if index is invalid', () => {
        expect(lookupChar('abc', -1)).to.equal('Incorrect index')
    })

    it('throw error if string length is less than given index', () => {
        expect(lookupChar('abc', 5)).to.equal('Incorrect index')
    })

    it('return char at given index', () => {
        expect(lookupChar('abc', 1)).to.equal('b')
    })

})