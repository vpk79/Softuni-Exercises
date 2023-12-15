function dungeonestDark(input) {

    let health = 100;
    let coins = 0;
    let rooms = input[0].split("|");
    let counter = 0;
    let isDead = false;

    for (let room of rooms) {
        let element = room.split(" ");
        let firstElement = element[0];
        let secondElement = Number(element[1])
        counter++;

        switch (firstElement) {
            case "potion":
                health + secondElement > 100 ? console.log(`You healed for ${100 - health} hp.`) : console.log(`You healed for ${secondElement} hp.`);
                
                health += secondElement;
                health > 100 ? health = 100 : void (0);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                console.log(`You found ${secondElement} coins.`);
                coins += secondElement;
                break;

            default:
                health -= secondElement;
                if (health > 0) {
                    console.log(`You slayed ${firstElement}.`)
                } else {
                    console.log(`You died! Killed by ${firstElement}.`);
                    console.log(`Best room: ${counter}`);
                    isDead = true;
                    break;
                }
                break;
        }

        if (isDead) { break };

    }

    if (isDead === false) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}







// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])