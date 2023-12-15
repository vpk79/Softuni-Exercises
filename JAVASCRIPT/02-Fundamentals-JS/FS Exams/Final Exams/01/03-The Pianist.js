function pianist(input) {
    const piecies = Number(input.shift());

    let pieciesList = [];
    let list = {};
    for (let i = 0; i < piecies; i++) {
        let line = input.shift();
        let [piece, composer, key] = line.split('|');
        addList(piece, composer, key);
    }

    for (let token of input) {
        if (token === 'Stop') break;
        if (token.includes('Add')) add(token);
        if (token.includes('Remove')) remove(token);
        if (token.includes('ChangeKey')) change(token);
    }

    function addList(piece, composer, key) {
        list = {
            piece,
            composer,
            key
        };
        pieciesList.push(list);
        
    }

    function check(song) {
        for (let line of pieciesList) {
            if (line.piece.includes(song)) {
                return true
            }
        }
        return false
    }

    function add(token) {
        let [command, piece, composer, key] = token.split('|');
        if (check(piece)) {
            console.log(`${piece} is already in the collection!`);
            return;
        }
        addList(piece, composer, key);
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }

    function remove(token){
        let [command, song] = token.split('|');
        if(!check(song)) {
            console.log(`Invalid operation! ${song} does not exist in the collection.`);
            return;
        }

        for(let list of pieciesList){
            if(list.piece.includes(song)) {
                let index = pieciesList.indexOf(list);
                pieciesList.splice(index, 1);
            }
        }

        console.log(`Successfully removed ${song}!`);
    }

    function change(token){
        let [command, song, newKey] = token.split('|');
        if(!check(song)) {
            console.log(`Invalid operation! ${song} does not exist in the collection.`);
            return;
        }

        for(let list of pieciesList){
            if(list.piece.includes(song)){
                list.key = newKey;
            }
        }

        console.log(`Changed the key of ${song} to ${newKey}!`);

    }

    for(let list of pieciesList){
        console.log(`${list.piece} -> Composer: ${list.composer}, Key: ${list.key}`);
    }
}




// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'])




pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)






