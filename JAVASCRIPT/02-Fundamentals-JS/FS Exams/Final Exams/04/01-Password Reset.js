function solve(input) {

    let string = input.shift();
    let newString = "";


    for (let line of input) {
        if (line === 'Done') break;

        if (line === 'TakeOdd') {
            if(newString.length > 0){
                string = newString;
                newString = "";
            }
            for (let i = 1; i < string.length; i += 2) {
                newString += string[i];
            }
            console.log(newString);

        } else if (line.includes('Cut')) {
            if(newString.length > 0){
                newString = cut(line);
            } else{
                newString = string;
                newString = cut(line);
            }
            console.log(newString);

        } else if (line.includes('Substitute')) {
            if(newString.length > 0){
                newString = substitute(line);
            } else {
                newString = string;
                newString = substitute(line);
            }
           

        }
    }


    if(newString.length > 0){
        console.log(`Your password is: ${newString}`);
    } else {
        console.log(`Your password is: ${string}`);
    }
    

    function cut(string) {
        let [command, index, length] = string.split(" ");
        index = Number(index);
        length = Number(length);

        return newString.slice(0, index) + newString.slice(index + length);
    }

    function substitute(string) {
        let [command, sub1, sub2] = string.split(" ");
        if (!newString.includes(sub1)) {
            console.log("Nothing to replace!");

        } else {
            while (newString.includes(sub1)) {
                newString = newString.replace(sub1, sub2)
            }

            console.log(newString);
        }
        return newString;
    }
}




// solve(([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"])
// )

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "TakeOdd",
    "Done"])

solve(["AtestBtest",
    "Cut 6 4",
    "Done"
])