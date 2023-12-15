function piccolo(input){

    let parking = new Set();

    for(let line of input){
        let[direction, number] = line.split(", ");
        if(direction !== 'OUT') {
            parking.add(number);
        } else{
            parking.delete(number)
        }
    }

    if(parking.size == 0){
        return "Parking Lot is Empty";
    }

    let sortedParking = new Set([...parking].sort())

    for(let key of sortedParking){
        console.log(key);
    }
}


// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// )

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']));