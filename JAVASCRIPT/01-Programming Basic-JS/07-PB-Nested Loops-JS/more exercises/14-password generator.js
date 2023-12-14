function passwordGenerator(input){

    let n = Number(input[0]);
    let l = Number(input[1]);
    let buffer = ""


    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            for(let k = 97; k < 97 + l; k++){
                for(let p = 97; p < 97 + l; p++){
                    for(let q = 1; q <= n; q++){
                        if(q > i && q > j){
                            let letter1 = String.fromCharCode(k);
                            let letter2 = String.fromCharCode(p);
                            buffer += (`${i}${j}${letter1}${letter2}${q} `)
                        }
                    }
                }
            }
        }
    }

    console.log(buffer);

}



passwordGenerator(["3","1"])