function solve(arr){

    let heroes = [];


    for(let token of arr){
        let[name, level, items] = token.split(" / ");
        level = Number(level);
        if(items !== undefined){
            items = items.split(", ")
        } else items = [];
        
       let heroInfo = {
            name,
            level,
            items
        }

        heroes.push(heroInfo)
    }

     
    console.log(JSON.stringify(heroes));

}



solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)