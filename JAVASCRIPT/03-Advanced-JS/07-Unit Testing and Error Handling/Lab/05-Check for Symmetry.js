const {expect} = require('chai');

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


console.log(isSymmetric(1,2,2,'1'));



describe('Symetry checkers', function(){
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    } )

    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    })

    it('returns false with non-array argument', () => {
        expect(isSymmetric(121)).to.be.false;
    })

    it('returns true when length is odd', () => {
        expect(isSymmetric([1,2,3,2,1])).to.be.true;
    })

    it('returns false for array-like args', () => {
        expect(isSymmetric('1, 2, 2, 1')).to.be.false;
    })

    it('returns false for mismatched types args', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    })
})