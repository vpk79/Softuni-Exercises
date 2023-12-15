function inventory(arr){
    let heroes = [];

    arr.forEach(line => {

        let[name, level, items] = line.split(" / ");

        heroes.push({ name, level: Number(level), items,});
        
        
    });

    heroes = heroes.sort((a , b) => a.level - b.level)
    
    heroes.forEach((obj) => {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    });
}




inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )