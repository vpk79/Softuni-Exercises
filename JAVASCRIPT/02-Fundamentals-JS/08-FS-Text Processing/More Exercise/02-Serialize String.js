function solve(input){
    let string = input[0];
    let serialize = "";
    let bufferArr = [];

    for(let i = 0; i < string.length; i++){
        let char = string[i];
        let charCheck = bufferArr.some(x => x.includes(char));
        if(charCheck) continue;
        serialize = `${char}:`
        for(let j = 0; j < string.length; j++){

            if (char === string[j]){
                serialize += "" + j + "/"
            }
        }
        serialize = serialize.slice(0, -1);
        bufferArr.push(serialize);
    }

    console.log(bufferArr.join("\n"));
}



// solve(["abababa"])
solve(["avjavamsdmcalsdm"])