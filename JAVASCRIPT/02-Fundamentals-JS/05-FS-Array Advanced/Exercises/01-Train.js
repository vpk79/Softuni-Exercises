function train(input) {
    let composition = input.shift().split(" ").map(x => Number(x));
    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let [command, count] = input[i].split(" ");

        if (command !== "Add") {
            command = Number(command);
            composition = addPassangers(command);
        } else {
            count = Number(count);
            composition = addWagons(count);
        }
    }

    function addPassangers(num) {
        for (let i = 0; i < composition.length; i++) {

            let people = composition[i];

            if (maxCapacity - people >= num) {
                people = people + num;
                num = 0;
                
                composition[i] = people;
            }

            if (num <= 0) {
                break;
            }
        }
        return composition;
    }

    function addWagons(num) {
        composition.push(num);
        return composition;
    }

   
    return(composition.join(" "));
}



console.log(train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']))


console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']))