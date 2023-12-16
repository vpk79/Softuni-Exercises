const {expect} = require('chai');


class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value
        this.active = true; // Default value
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }
    get VAT() {
        return this._VAT;
    }
    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }
    get active() {
        return this._active;
    }
    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }
    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}


describe('PaymentPackage', function(){

    describe('Constructor', ()=>{
        let paymentPackage;
        beforeEach(function(){
            paymentPackage = new PaymentPackage('name', 10);
        })

        it('name should be correct', () => {
            expect(paymentPackage._name).to.equal('name');
        })

        it('value should be correct', () => {
            expect(paymentPackage._value).to.equal(10);
        })

        it('vat should be correct', () => {
            expect(paymentPackage._VAT).to.equal(20);
            expect(typeof(paymentPackage._VAT)).to.equal('number')
        })

        it('active should be correct', () => {
            expect(paymentPackage._active).to.equal(true);
            expect(typeof(paymentPackage._active)).to.equal('boolean')
        })
    })

    describe('test getters', () => {
        let paymentPackage;
        beforeEach(function () {
            paymentPackage = new PaymentPackage('name', 10);
        })

        it('name should return correct value', ()=>{
            expect(paymentPackage.name).equal('name');
        })

        it('value should return correct value', () => {
            expect(paymentPackage.value).equal(10);
        })

        it('vat should return correct value', () => {
            expect(paymentPackage.VAT).equal(20);
        })

        it('active should return correct value', () => {
            expect(paymentPackage.active).equal(true);
        })
    })

    describe('test setters', () => {
        it('set incorrect name', ()=>{
            expect(function(){new PaymentPackage(10, 10)}).to.throws('Name must be a non-empty string')
        })     
        
        it('set incorrect name', () => {
            expect(function () { new PaymentPackage('', 10) }).to.throws('Name must be a non-empty string')
        }) 
        
        it('set correct name', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(paymentPackage.name).equal('name');
        }) 

        it('set incorrect value type', () => {
            expect(function () { new PaymentPackage('name', '10') }).to.throws('Value must be a non-negative number')
        }) 

        it('set incorrect value', () => {
            expect(function () { new PaymentPackage('name', -10) }).to.throws('Value must be a non-negative number')
        }) 


        it('set correct value', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(paymentPackage.value).equal(10);
            paymentPackage.value = 0;
            expect(paymentPackage.value).equal(0);

        }) 

        it('set incorrect vat type', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(function () { paymentPackage.VAT = 'fail' }).to.throws('VAT must be a non-negative number')
        }) 

        it('set incorrect vat value', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(function () { paymentPackage.VAT = -10 }).to.throws('VAT must be a non-negative number')
        }) 

        it('set correct vat value', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(paymentPackage.VAT = 30).equal(30);
        }) 

        it('set incorrect active value', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(function () { paymentPackage.active = 'fail' }).to.throws('Active status must be a boolean')
        }) 

        it('set correct active value', () => {
            let paymentPackage = new PaymentPackage('name', 10);
            expect(paymentPackage.active = true).equal(true);
        }) 

    })

    describe('toString', function(){
        let paymentPackage;
        beforeEach(function () {
            paymentPackage = new PaymentPackage('name', 10);
        })

        it('test active state', ()=>{
            const output = [
                `Package: name`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');

            expect(paymentPackage.toString()).equal(output);
        })


        it('test not active state', () => {
            const output = [
                `Package: name (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');
            paymentPackage.active = false;
            expect(paymentPackage.toString()).equal(output);
        })
    })
   
})