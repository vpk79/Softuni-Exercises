function houseParty(input){
    let listOfGuests = [];

    for(let i = 0; i < input.length; i++){
        let sentence = input[i];

        if(sentence.includes('is going')){
            listOfGuests = isGoing(sentence);

        } else if(sentence.includes('is not going')){
            listOfGuests = notGoing(sentence);
        }
    }

    function isGoing(string){
        let arr = string.split(" ");
        let name = arr[0];
        if(checkList(name)){
            listOfGuests = addGuestIsPresent(name);
        } else {
            listOfGuests = addGuest(name);
        }

        return listOfGuests
    }

    function notGoing(string){
        let arr = string.split(" ");
        let name = arr[0];
        if(checkList(name)){
            listOfGuests = removeGuest(name);
        } else {
            listOfGuests = addGuestIsNotPresent(name);
        }

        return listOfGuests;
    }

    function checkList(name){
       if (listOfGuests.includes(name)){
            return true ;
        } else {
            return false;
        }
    }

    function addGuest(name){
        listOfGuests.push(name);
        return listOfGuests;
    }

    function removeGuest(name){
       listOfGuests = listOfGuests.filter(x => x !== name);
       return listOfGuests;
    }

    function addGuestIsPresent(name){
        console.log(`${name} is already in the list!`)
        return listOfGuests;
    }

    function addGuestIsNotPresent(name){
        console.log(`${name} is not in the list!`);
        return listOfGuests;
    }

    return(listOfGuests.join("\n"))
}


console.log(houseParty(['Allie is going!',
'George is going!',
'George is going!',
'John is not going!',
'George is not going!',
'George is not going!']));

// console.log(houseParty(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']));