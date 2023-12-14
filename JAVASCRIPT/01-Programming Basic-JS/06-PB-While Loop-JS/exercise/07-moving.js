function moving(input){
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let command = "";
    let box = 0;

    let freeSpace = Math.floor(width * length * height);

    while(freeSpace >= 0){
        command = input[index];

        if(command === "Done"){
            break;
        }

        box = Number(input[index]);
        index++;

        freeSpace -= box;
    }

    if(command === "Done"){
        console.log(`${freeSpace} Cubic meters left.`);
    } else{
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }

}







moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

