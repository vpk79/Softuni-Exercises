function solve(input) {

    let tickets = input.split(",").map(x => x.trim())
    let pattern = /(?<win>[@#$^])\1{5,}/

    let ticket1, ticket2;

    for (let line of tickets) {
        if (line.length === 20) {
            let leftHalf = line.slice(0, line.length / 2);
            let rightHalf = line.slice(line.length / 2)

            if (pattern.test(leftHalf) && pattern.test(rightHalf)) {
                ticket1 = leftHalf.match(pattern);
                ticket2 = rightHalf.match(pattern);
                
                if (ticket1[0].length === 10 && ticket2[0].length === 10) {
                    console.log(`ticket "${line}" - ${ticket1[0].length}${ticket1[0][0]} Jackpot!`);
                }
                else if ((ticket1[0].length >= 6 && ticket2[0].length >= 6)) {
                    let minimum = Math.min(ticket1[0].length, ticket2[0].length)

                    console.log(`ticket "${line}" - ${minimum}${ticket1[0][0]}`);

                } else {
                    console.log(`ticket "${line}" - no match`);
                }

            } else {
                console.log(`ticket "${line}" - no match`);
            }

        } else {
            console.log("invalid ticket");
            continue;
        }
    }
}


// solve('Cash$$$$$$Ca$$$$$$sh')
// solve('$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey')
// solve('validticketnomatch:(')
// solve('$$$$$$$$$$$$$@@@@@@$')
// solve('$$$$$$$$$@@@@@@@@@@@')
// solve('@@@@@@asdf@@@@@@@@@@')
// solve('@@@@@@@@@@asdf@@@@@@')
solve('th@@@@@@@emo@@@@@@ey')
