function partyTime(input){

    let VIPList = [];
    let RegulatList = [];

    while(true){
        guest = input.shift()
        if(guest == 'PARTY') break;
        if(isNaN(guest[0])){
            RegulatList.push(guest)
        } else {
            VIPList.push(guest)
        }
    }
    for(let guest of input){

        if (isNaN(guest[0])){
            RegulatList.splice(RegulatList.indexOf(guest), 1)
        } else{
            VIPList.splice(VIPList.indexOf(guest), 1)
        }
    }
    console.log(VIPList.length + RegulatList.length);

    for(let guest of VIPList){
        console.log(guest);
    }

    for(let guest of RegulatList){
        console.log(guest);
    }
}


// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ])

partyTime([
    // 'm8rfQBvl',
    // 'fc1oZCE0',
    // 'UgffRkOn',
    // '7ugX7bm0',
    // '9CQBGUeJ',
    // '2FQZT3uC',
    // 'dziNz78I',
    // 'mdSGyQCJ',
    // 'LjcVpmDL',
    // 'fPXNHpm1',
    // 'HTTbwRmM',
    // 'B5yTkMQi',
    // '8N0FThqG',
    // 'xys2FYzn',
    // 'MDzcM9ZK',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)