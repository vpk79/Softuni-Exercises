function cardGame(input) {
    let players = new Map();

    for (let line of input) {
        let [name, cards] = line.split(": ");
        cards = cards.split(', ')
        for (let card of cards) {
            if (players.get(name) && players.get(name).includes(card)) {
                continue;
            } else if (!players.get(name)) {
                players.set(name, card)
            } else {
                players.set(name, players.get(name) + " " + card)
            }
        }
    }

    for (let [name, cards] of players) {
        let score = cardsEvaluation(cards);
        console.log(`${name}: ${score}`);
    }


    function cardsEvaluation(cards){
        cards = cards.split(" ");
        let sum = 0;
        let firstNum, secondNum;
        for (let couple of cards) {

            if(couple.length === 3){
                firstNum = couple[0] + couple[1];
                secondNum = couple[2];
            } else{
                firstNum = couple[0];
                secondNum = couple[1];
            }
            
            if (isNaN(firstNum)) {
                switch (firstNum) {
                    case 'J': firstNum = 11; break;
                    case 'Q': firstNum = 12; break;
                    case 'K': firstNum = 13; break;
                    case 'A': firstNum = 14; break;
                }
            } else {
                firstNum = Number(firstNum);
            }

            
            switch (secondNum) {
                case 'S': secondNum = 4; break;
                case 'H': secondNum = 3; break;
                case 'D': secondNum = 2; break;
                case 'C': secondNum = 1; break;
            }
            sum += firstNum * secondNum;
        }
        return sum;
    }
}



// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]
// )


cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)