function dictionary(arr) {

    let arrOfObj = [];
    let parsedLine;

    for (let line of arr) {
        parsedLine = JSON.parse(line)
        arrOfObj.push(parsedLine)
    }

    for (let i = 1; i < arrOfObj.length; i++) {
        Object.assign(arrOfObj[0], arrOfObj[i]);
    }

    let dictionaryObj = arrOfObj[0];

    Object.keys(dictionaryObj).sort().forEach(function (key) {
        let value = dictionaryObj[key];
        delete dictionaryObj[key];
        dictionaryObj[key] = value;
    })

    for (let key of Object.keys(dictionaryObj)) {
        console.log(`Term: ${key} => Definition: ${dictionaryObj[key]}`);
    }

}




dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])


    