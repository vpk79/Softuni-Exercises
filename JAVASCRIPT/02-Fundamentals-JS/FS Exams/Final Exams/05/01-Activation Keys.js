function solve(input){
    let array = input.shift().split("");

    for(let line of input){
        if(line === 'Generate') break;
        if(line.includes('Slice')){
            remove(line);
            console.log(array.join(""));
        } else if (line.includes('Flip')) {
            flip(line);
            console.log(array.join(""));
        } else if (line.includes('Contains')) {
            let [command, string] = line.split(">>>");
            let stringArray = array.join("");
            if (stringArray.includes(string)) {
                console.log(`${stringArray} contains ${string}`);
            } else {
                console.log("Substring not found!");
            }
        }       
        
    }

    console.log(`Your activation key is: ${array.join("")}`);



    function remove(string){
        let [command, start, end] = string.split(">>>");
        start = Number(start);
        end = Number(end);
        let count = end - start;
        array.splice(start, count)
    }


    function flip(string){
        let [command, type, start, end] = string.split(">>>");
        start = Number(start);
        end = Number(end);
        if(type === 'Upper'){
            for(i = start; i < end; i++){
                array[i] = array[i].toUpperCase();
            }
        } else{
            for (i = start; i < end; i++) {
                array[i] = array[i].toLowerCase();
            }
        } 
    }
}


solve(([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>abg",
    "Contains>>>deF",
    "Generate"]))