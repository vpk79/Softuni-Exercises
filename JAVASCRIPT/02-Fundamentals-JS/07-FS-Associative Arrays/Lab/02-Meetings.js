function solve(input){
    let meetingList = new Map();

    for(let line of input){
        let[day, name] = line.split(" ");

        if(meetingList.has(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetingList.set(day, name);
        console.log(`Scheduled for ${day}`);
    }

    for(let [key, value] of meetingList){
        console.log(`${key} -> ${value}`);
    }
}






// solve(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim'])

solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
