function password(input){
    
    let index = 0;
    let name = input[index];
    index++;
    let pass = input[index];
    index++;

    let text = input[index];
    

    while(text !== pass){
        text = input[index];
        index++;
    }

    console.log(`Welcome ${name}!`);

}









password(["Gosho",
"secret",
"secret"])

