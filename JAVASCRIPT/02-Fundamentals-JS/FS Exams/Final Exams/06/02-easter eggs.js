function solve(input){
    let pattern = /[@#]{1,}(?<color>[a-z]{3,})[@#]{1,}[^\d\w]*\/{1,}(?<amount>\d+)\/{1,}/gm

    let string = input.shift();

    let match = [...string.matchAll(pattern)]

    for(let token of match){
        console.log(`You found ${token.groups.amount} ${token.groups.color} eggs!`);
    }
}



// solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//?@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@* $ %^&* /5/'])
// solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])
// solve(['##@InvalidColor##/54/, @notc0l0r@*23*, @invalid_color@/notnumber/'])