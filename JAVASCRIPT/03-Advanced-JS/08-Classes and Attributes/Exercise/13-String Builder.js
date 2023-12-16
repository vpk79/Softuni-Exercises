const { expect, should } = require('chai');

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }
    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }
    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }
    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }
    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }
    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be a string');
    }
    toString() {
        return this._stringArray.join('');
    }
}


describe('StringBuilder', function () {

    describe('functions tests', () => {
        let string;
        beforeEach(function () {
            string = new StringBuilder('Ivan');
        })

        it('test whether StringBuilder is class', () => {
            expect(string).to.be.instanceOf(StringBuilder);
        })

        it('append must not to throw error with correct type of data', () => {
            expect(string).to.have.property('append');
            expect(function () { string.append('hello') }).not.throw('Argument must be a string');
            expect(string.toString()).equal('Ivanhello');
            
        })

        it('append must throw error with incorrect type of data', () => {
            expect(function () { string.append(123) }).to.throw('Argument must be a string');
            expect(function () { string.append() }).to.throw('Argument must be a string');
        })

        it('prepend must not to throw error with correct type of data', () => {
            expect(string).to.have.property('prepend');
            expect(function () { string.prepend('hello') }).not.throw('Argument must be a string');
            expect(string.toString()).equal('helloIvan');
        })

        it('prepend must throw error with incorrect type of data', () => {
            expect(function () { string.prepend(123) }).to.throw('Argument must be a string');
            expect(function () { string.prepend() }).to.throw('Argument must be a string');
        })

        it('insertAt must throw error with inccorect type of data', ()=>{
            expect(string).to.have.property('insertAt');
            expect(function () { string.insertAt(123) }).to.throw('Argument must be a string');
           
        })

        it('insertAt must not to throw error with correct type of data', () => {
            expect(string).to.have.property('insertAt');
            expect(function () { string.insertAt('win') }).not.to.throw('Argument must be a string');
            string.insertAt('az', 3)
            expect(string.toString()).equal('winazIvan');
        })

        
        it('remove must not to throw error with correct type of data', () => {
            expect(string).to.have.property('remove');
            expect(function () { string.remove(2,3) }).not.to.throw('Argument must be a string');
            string.remove(2, 3);
            expect(string.toString()).equal('Iv');
            
        })

        it('not to throw error with correct type of data', ()=>{
            expect(string).to.have.property('toString');
            expect(string.toString()).equal('Ivan');
        })

        it('static must throw error with incorrect type data',()=>{
            expect(StringBuilder).to.have.property('_vrfyParam');
            expect(() => { StringBuilder._vrfyParam(123) }).to.throw('Argument must be a string');
        })

        it('static must not throw error with incorrect type data', () => {
            expect(() => { StringBuilder._vrfyParam('ivan') }).not.to.throw('Argument must be a string');
        })
           
    })

    describe('tests with incorrect input', () => {
        let string;
        it('must throw error with incorrect data',()=>{
            expect(function () { string = new StringBuilder(123); }).to.throw('Argument must be a string');
            expect(function () { string = new StringBuilder([]); }).to.throw('Argument must be a string');
            expect(function () { string = new StringBuilder(true); }).to.throw('Argument must be a string');
        })
           
        })

    describe('constructor tests', () => {
        it('should create an instance without arguments', () => {
            const emptyStringBuilder = new StringBuilder();
            expect(emptyStringBuilder.toString()).to.equal('');
        });

        it('toString should return an empty string for empty instance', () => {
            const emptyStringBuilder = new StringBuilder();
            expect(emptyStringBuilder.toString()).to.equal('');
        });
    });

})


// let str = new StringBuilder('hello');
// str.append(', there');
// str.prepend('User, ');
// str.insertAt('woop', 5);
// console.log(str.toString());
// // str.remove(6,3)
// console.log(str.toString());
// str.append('');
// let rem = str.remove(5,3)
// console.log(rem);