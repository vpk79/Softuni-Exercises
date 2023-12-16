function solution(){

    class Balloon {
        constructor(ballonColor, gasWeight){
            this.color = ballonColor;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon{
        constructor(ballonColor, gasWeight, ribbonColor, ribbonLength){
            super(ballonColor, gasWeight);
            this._ribbon = {
                color:ribbonColor,
                length: Number(ribbonLength)
            }
            
        }
        get ribbon(){return this._ribbon};
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(ballonColor, gasWeight, ribbonColor, ribbonLength, text){
            super(ballonColor, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }
    return{
       Balloon,
       PartyBalloon,
       BirthdayBalloon
    }
}

let classes = solution();

let test = new classes.Balloon("Tumno-bqlo", 20.5);

console.log(test);
console.log(test.gasWeight === 20.5);
console.log(test.gasWeight);

// let classes = solution();
// let testBalloon = new classes.Balloon(
//     "yellow", 20.5);
// let testPartyBalloon = new
//     classes.PartyBalloon("yellow", 20.5,
//         "red", 10.25);
// let ribbon = testPartyBalloon.ribbon;
// console.log(testBalloon);
// console.log(testPartyBalloon);
// console.log(ribbon);

