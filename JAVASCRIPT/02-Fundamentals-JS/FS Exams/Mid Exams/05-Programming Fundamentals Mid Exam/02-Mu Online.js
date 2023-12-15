function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let counter = 1;

    let array = input.split("|");

    for (const room of array) {
        let content = room.split(" ");
        let command = content[0];
        let number = Number(content[1]);

        switch (command) {
            case "potion":
                let amount = 0;
                health + number <= 100 ? amount = number : amount = 100 - health;
                health += number;
                if (health > 100) health = 100;

                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;


            case "chest":
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                break;

            default:
                health -= number;
                if(health > 0){
                    console.log(`You slayed ${command}.`);
                } else{
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${counter}`);
                    return;
                }
                break;
        }

        counter++;
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}


// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")