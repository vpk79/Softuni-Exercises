function ages(age){

    let typeOfPerson = ""

    if(age < 0){
        console.log("out of bounds");
    } else if(age <= 2){
        typeOfPerson = "baby";
    } else if(age <= 13){
        typeOfPerson = "child";
    } else if(age <= 19){
        typeOfPerson = "teenager";
    } else if(age <= 65){
        typeOfPerson = "adult";
    } else{
        typeOfPerson = "elder";
    }

    console.log(typeOfPerson);
}



ages(-1)