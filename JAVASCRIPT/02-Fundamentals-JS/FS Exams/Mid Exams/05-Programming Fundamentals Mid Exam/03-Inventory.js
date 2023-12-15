function inventory(input) {
    let inventoryArray = input.shift().split(", ")

    for (const sentence of input) {
        if (sentence == 'Craft!') {
            console.log(inventoryArray.join(", "));
            break;
        }

        let sentenceArray = sentence.split(" - ");
        let [command, item] = sentenceArray;

        switch (command) {
            case 'Collect':
                if (!inventoryArray.includes(item)) inventoryArray.push(item);
                break;

            case 'Drop':
                if (inventoryArray.includes(item)) inventoryArray = inventoryArray.filter(x => x !== item);
                break;
            
            case 'Combine Items': 
                let items = item.split(":");
                let oldItem = items[0];
                let newItem = items[1];
                if(inventoryArray.includes(oldItem)){
                    let indexOfOldItem = inventoryArray.indexOf(oldItem);
                    inventoryArray.splice(indexOfOldItem + 1, 0, newItem);
                }

                break;
            
            case 'Renew':
                if(inventoryArray.includes(item)){
                    let indexOfItem = inventoryArray.indexOf(item);
                    let itemToMove = inventoryArray.splice(indexOfItem, 1).join("")
                    inventoryArray.push(itemToMove);
                }

                break;
        }

    }
}


// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ])



inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )