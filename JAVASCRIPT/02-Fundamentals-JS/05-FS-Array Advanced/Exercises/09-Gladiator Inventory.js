function gladiatorInventory(input) {
    let inventory = input[0].split(" ");

    for (let i = 1; i < input.length; i++) {
        let sentence = input[i].split(" ");
        let [command, equipment] = sentence;

        switch (command) {
            case 'Buy': buy(equipment); break;
            case 'Trash': trash(equipment); break;
            case 'Repair': repair(equipment); break;
            case 'Upgrade': upgrade(equipment); break;
        }
    }


    function buy(string) {
        checkIsAvailable(string) ? void (0) : inventory.push(string);
    }

    function trash(string) {
        checkIsAvailable(string) ? inventory = inventory.filter(x => x !== string) : void (0);
    }

    function repair(string) {
        checkIsAvailable(string) ? inventory = inventory.filter(x => x !== string) : void (0);
        inventory.push(string);
    }

    function upgrade(string) {
        let position = 0;
        let arrOfString = string.split("-");
        let firstWord = arrOfString[0];

        if (checkIsAvailable(firstWord)) {
            position = inventory.indexOf(firstWord);
            string = string.replace("-", ":");
            inventory.splice(position + 1, 0, string);
        }
    }

    function checkIsAvailable(string) {
        return inventory.includes(string);
    }


    return (inventory.join(" "))
}






console.log(gladiatorInventory(
    ['SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel']
))


console.log((gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])));