function prinDeckOfCards(cards) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'


    };

  
    let result = [];
    let face, suit;
    for(let card of cards){
        if(card.length === 3){
            face = card.slice(0,2);
            suit = card.slice(2);
        } else{
            [face, suit] = card.split('');
        }

        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            console.log((`Invalid card: ${face + suit}`));
            return;
        }

       
        let newCard = createCard(face, suit);
        result.push(newCard.toString())
    }

   

    function createCard(face, suit) {

        return Obj = {
            face,
            suit: suits[suit],

            toString() {
                return this.face.toString() + this.suit.toString()
            }
        }

    }

    console.log(result.join(' '));
}

// // solve('1', 'C')
// let newcard = solve('10', 'H');
// console.log(newcard.toString())

// prinDeckOfCards(['AS', '10D', 'KH', '2C']);
prinDeckOfCards(['5S', '3D', 'QD', '1C']);