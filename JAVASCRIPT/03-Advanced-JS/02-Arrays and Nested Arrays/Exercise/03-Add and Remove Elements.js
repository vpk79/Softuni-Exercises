function solve(input){

    let arr = [];
    let num = 1;

for(let command of input){

    command == 'add' ? arr.push(num++) : arr.pop(num++)
    
}
    if (arr.length == 0) {
        console.log("Empty");
        
    } else {
        console.log(arr.join("\n"));
    }
}


// solve(['add',
//     'add',
//     'add',
//     'add']
// )

// solve(['remove',
//     'remove',
//     'remove'])


// solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add'])

// solve(['add',
// 'add',
// 'remove',
//     'remove',
//     'remove',
//     'remove',
// 'add',
// 'add'])

solve([])