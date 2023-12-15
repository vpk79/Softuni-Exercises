function worldTour(input){

    let stops = input.shift();

    for(let line of input){
        if(line === 'Travel') break;
        if(line.includes('Add')) stops = add(line);
        if(line.includes('Remove')) stops = remove(line);
        if(line.includes('Switch')) stops = switching(line);
    }

    function add(line){
        let [command, index, string] = line.split(':');
        index = Number(index);
        if(stops[index]){
            stops = [...stops];
            stops.splice(index, 0, string);
           stops = stops.join('');
        }
        console.log(stops);
        return stops;
    }

    function remove(line){
        let[command, startIdx, endIdx] = line.split(':');
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        if(stops[startIdx] && stops[endIdx]){
           stops = stops.slice(0, startIdx) + stops.slice(endIdx + 1);
        }
        console.log(stops);
        return stops;
    }

    function switching(line){
        let[command, oldString, newString] = line.split(":");
        let pattern = new RegExp(oldString, 'g');
        if(stops.includes(oldString)){
           stops = stops.replace(pattern, newString);
        }
        console.log(stops);
        return stops;
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}


// worldTour(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"])
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
