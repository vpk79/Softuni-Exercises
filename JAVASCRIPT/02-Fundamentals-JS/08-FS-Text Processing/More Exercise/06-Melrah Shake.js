function solve(input) {
    let string = input[0];

    let pattern = input[1];
    let counter = 0;

    while (string.indexOf(pattern) !== -1) {
        if(pattern === '')break;

        string = string.replace(pattern, "")
        counter++;

        if (string.lastIndexOf(pattern) !== -1) {
            string = string.slice(0, string.lastIndexOf(pattern)) + string.slice(string.lastIndexOf(pattern) + pattern.length)
            counter++;
        } else {
            break;
        }

        if (counter === 2) {
            console.log("Shaked it.");
            counter = 0;
            
            let index = Math.floor(pattern.length / 2);
            pattern = pattern.slice(0, index) + pattern.slice(index + 1);
            if (pattern.length < 1) break;

        } else {
            console.log("No shake.");
            console.log(string);
            return;
        }
    }
    console.log("No shake.");
    console.log(string);
}


solve(['astalavista baby','sta'])
// solve(['##mtm!!mm.mm*mtm.#',
//     'mtm'])

// solve(['astalavista baby', '123'])

// solve(['!.,$%^&*@)><(@.../o$@)@)><(@!(%!@)><(@$,.!','@)><(@'])

// test 10 ako ima prazen patttern = '' togava gurmi