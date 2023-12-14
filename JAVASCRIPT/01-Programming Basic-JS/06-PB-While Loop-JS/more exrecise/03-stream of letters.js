function streamOfLetters(input) {
    let index = 0;
    let char = input[index];
    index++;

    let counterC = 0;
    let counterO = 0;
    let counterN = 0;
    let word = "";
    let wholeWord = "";

    while (char !== "End") {
        let charCode = char.charCodeAt(0);
        

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {

            if (char === "c" && counterC < 1) {
                counterC++;
            } else if(char === "c"){
                word += char;
            
            } else if (char === "o" && counterO < 1) {
                counterO++;
            } else if(char == "o"){
                word += char;
            
            } else if (char === "n" && counterN < 1) {
                counterN++;
            } else if(char === "n"){
                word += char;

            } else{
                word += char;
            }
              
            
        }

        if(counterC >= 1 && counterN >= 1 && counterO >= 1){
            
            wholeWord += word + ' ';
            word = "";
            counterC = 0;
            counterN = 0;
            counterO = 0;
        }


        char = input[index];
        index++;
    }
    console.log(wholeWord);

} 



streamOfLetters(["H","n","e","l","l","o","o","c","t","c","h","o","e","r","e","n","e","End"])