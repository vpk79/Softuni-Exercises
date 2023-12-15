function addAndRemove(input){
    let index = 1;
    let buffer = [];

    for(let i = 0; i < input.length; i++){
        let command = input[i];
        if(command === "add"){
            buffer.push(index)
        } else {
            buffer.pop(index)
        }
        index++;
    }

    if(buffer.length < 1){
        console.log("Empty");
    } else {
        console.log(buffer.join(" "));
    }
    
}



addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['add', 'remove', 'remove', 'remove', 'remove'])