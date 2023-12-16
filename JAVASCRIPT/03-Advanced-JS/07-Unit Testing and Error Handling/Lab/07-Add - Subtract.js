const {expect} = require('chai');

function createCalculator(){
    let sum = 0;

    return  {
        subtract(value){
            sum -= Number(value)
        },
        add(value){
            sum += Number(value);
        },  
        get(){
            return sum;
        }
    }
}



describe('Calculator', function(){
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('return zero initial value', () => {
        expect(calc.get()).to.equal(0);
    });

    describe('number arguments', () => {

        it('can add number', () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);

        });

        it('can add more than one number', () => {
            calc.add(1);
            calc.add(1);
            expect(calc.get()).to.equal(2);

        });


        it('can subtract number', () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(- 1);

        });

        it('can add and subtract number', () => {
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);

        });
    })

    describe('string arguments', ()=>{

        it('can add numbers as string', ()=> {
            calc.add('1');
            expect(calc.get()).to.equal(1);
        })

        it('can subtract numbers as string', () => {
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        })
    })


    describe('test overloading', ()=> {

        it('overload 1', () => {
            calc.add(23);
            expect(calc.get()).to.equal(23);
        })


        it('overload 2', () => {
            calc.add(113);
            calc.add(231);
            expect(calc.get()).to.equal(344);
        })

        it('overload 3', () => {
            calc.add(1);
            calc.add(2);
            calc.add(3);
            expect(calc.get()).to.equal(6);
        })

        it('overload 4', () => {
            calc.add(1);
            calc.subtract('2');
            calc.add(3);
            calc.add('4');
            calc.subtract(5);
            calc.add(6);
            expect(calc.get()).to.equal(7);
        })
    })


})