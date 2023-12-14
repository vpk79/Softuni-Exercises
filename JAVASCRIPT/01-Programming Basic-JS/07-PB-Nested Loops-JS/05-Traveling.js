function traveling(input){
    let index = 0;
    let destination = input[index];
    index++;
    let budget = Number(input[index]);
    index++;
    let income = 0;

    while(destination !== "End"){
        income += Number(input[index]);

        if(income >= budget){
            console.log(`Going to ${destination}!` );
            index++;
            destination = input[index]; 
            index++;
            budget = Number(input[index]) 
            income = 0;          
        }
       
        index++;
    }
}






traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

