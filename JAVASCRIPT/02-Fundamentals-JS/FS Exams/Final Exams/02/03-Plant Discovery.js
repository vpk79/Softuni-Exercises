function plantDiscovery(input) {
    const num = Number(input.shift());

    let plants = {};

    for (let i = 0; i < num; i++) {
        let [plant, rarity] = input.shift().split('<->');
        plants[plant] = {
            rarity: Number(rarity),
            rating: []
        };
    }

    for (let line of input) {
        if (line === 'Exhibition') break;
        if (line.includes('Rate')) rate(line);
        if (line.includes('Update')) update(line);
        if (line.includes('Reset')) reset(line);
    }

    function rate(line) {
        const lineArr = line.split(' ');
        const plant = lineArr[1];
        const addRating = Number(lineArr[3]);
        if (!plants[plant]) {
            console.log('error');
        } else {
            plants[plant]['rating'].push(addRating);
        }
    }
    function update(line) {
        const lineArr = line.split(' ');
        const plant = lineArr[1];
        const newRarity = Number(lineArr[3]);
        if (!plants[plant]) {
            console.log('error');
        } else {
            plants[plant]['rarity'] = newRarity;
        }

    }

    function reset(line) {
        let [command, plant] = line.split(' ');
        if (!plants[plant]) {
            console.log('error');
        } else {
            plants[plant]['rating'] = [];
        }

    }
    console.log("Plants for the exhibition:")

    for (let key in plants) {
        let avgRating = plants[key].rating.reduce((a, x) => a + x, 0) / plants[key].rating.length
        if (!avgRating) avgRating = 0;
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}



// plantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"])


plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
