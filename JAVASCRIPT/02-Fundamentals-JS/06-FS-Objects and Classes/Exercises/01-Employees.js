function employees(arr){
    let obj = {};

    for(let name of arr){
        obj[name] = name.length;
    }

    for(let key of Object.keys(obj)){
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}



employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])