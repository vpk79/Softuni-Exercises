function evenOddPositions(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let odd = 0;
    let even = 0;
    let buffer = "";
    let currentNum = 0;

    for (let i = num1; i <= num2; i++) {
        let num1AsString = String(i);

        for (let j = 0; j < num1AsString.length; j++) {
            currentNum = Number(num1AsString[j]);
            if (j % 2 == 0) {
                odd += currentNum;
            } else {
                even += currentNum;
            }


        }
        if (odd === even) {
            buffer += num1AsString + " ";
        }

        even = 0;
        odd = 0;


    }
    
    
    
        console.log(buffer);
    

    
}








evenOddPositions(["299900",
"300000"])
