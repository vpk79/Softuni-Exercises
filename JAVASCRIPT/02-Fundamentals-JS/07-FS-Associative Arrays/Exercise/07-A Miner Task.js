function aMinerTask(input){
    let resources = new Map();

    for(let i = 0; i < input.length; i += 2){
        let item = input[i];
        let quantity = Number(input[i+1]);

        if(!resources.get(item)){
            resources.set(item, quantity)
        } else {
            resources.set(item, resources.get(item) + quantity)
        }
    }

    for(let [key, value] of resources){
        console.log(`${key} -> ${value}`);
    }
}



// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])