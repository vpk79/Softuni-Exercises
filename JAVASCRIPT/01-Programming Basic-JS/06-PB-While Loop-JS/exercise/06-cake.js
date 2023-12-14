function cake(input){
    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeHeight = Number(input[index]);
    index++;
    let command = "";

    let fullCake = Math.floor(cakeWidth * cakeHeight);

    while (fullCake >= 0){
        command = input[index];
        
        if (command === "STOP"){
            break;
        }
        let slices = Number(input[index]);
        index++;
        fullCake -= slices;
    }

    if(command === "STOP"){
        console.log(`${fullCake} pieces are left.`);
    } else { 
        console.log(`No more cake left! You need ${Math.abs(fullCake)} pieces more.`);
    }

    


}



cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

