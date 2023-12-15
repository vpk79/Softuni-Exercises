function legendaryFarming(input){

    let qualityLoot = new Map();
    let junkLoot = new Map();

    qualityLoot.set('fragments', 0);
    qualityLoot.set('shards', 0);
    qualityLoot.set('motes', 0)

    let loot = input.split(" ").map(x => isNaN(x) ? x.toLowerCase() : Number(x));

    for(let i = 0; i < loot.length; i += 2){
        let quantity = loot[i];
        let material = loot[i+1];

        if (material !== "shards" && material !== "fragments" && material !== "motes"){
            if(!junkLoot.get(material)){
                junkLoot.set(material, quantity);
            } else{
                junkLoot.set(material, junkLoot.get(material) + quantity);
            }
        } else {
                qualityLoot.set(material, qualityLoot.get(material) + quantity);
                if(qualityLoot.get(material) >= 250){
                    buyWeapon(material)
                    break;
            }
        }

    }

    let sortedQualityLoot = new Map([...qualityLoot].sort((a,b) => b[1] == a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))

    let sortedJunkLoot = new Map([...junkLoot].sort((a,b) => a[0].localeCompare(b[0])))
  
    for(let [material, quantity] of sortedQualityLoot){
        console.log(`${material}: ${quantity}`);
    }

    for(let [material, quantity] of sortedJunkLoot){
        console.log(`${material}: ${quantity}`);
    }

    function buyWeapon(material){
        if(material == 'motes'){
            console.log("Dragonwrath obtained!");
            qualityLoot.set(material, qualityLoot.get(material) - 250);
        }else if(material == 'shards'){
            console.log("Shadowmourne obtained!");
            qualityLoot.set(material, qualityLoot.get(material) - 250);
        } else{
            console.log("Valanyr obtained!");
            qualityLoot.set(material, qualityLoot.get(material) - 250);
        }

    }

}








legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')