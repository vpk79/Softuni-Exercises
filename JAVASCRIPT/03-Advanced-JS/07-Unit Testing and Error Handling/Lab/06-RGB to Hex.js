const {expect} = require('chai');

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


console.log(rgbToHexColor(255,255,255));


describe('rgbToHexColor', function(){
    it('take integer numbers', ()=>{
        expect(rgbToHexColor(1,1,1)).to.be.string;
    })

    it('return heximal string', () => {
        expect(rgbToHexColor(1, 1, 1)).to.be.equal('#010101');
    })


    it('return undefined if red is not integers', ()=>{
        expect(rgbToHexColor('0.1',1,1)).to.equal(undefined);
    })

    it('return undefined if green is not integers', () => {
        expect(rgbToHexColor(1, '0.1', 1)).to.equal(undefined);
    })

    it('return undefined if blue is not integers', () => {
        expect(rgbToHexColor(1, 1,'0.1')).to.equal(undefined);
    })


    it('test lowest possible arguments', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })

    it('test maximum possible arguments', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })


    it('return undefined if red is out of range (0-255)', () => {
        expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
    })

    it('return undefined if red is out of range (0-255)', () => {
        expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
    })

    it('return undefined if green is out of range (0-255)', () => {
        expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
    })

    it('return undefined if green is out of range (0-255)', () => {
        expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
    })

    it('return undefined if blue is out of range (0-255)', () => {
        expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
    })

    it('return undefined if blue is out of range (0-255)', () => {
        expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
    })

})



