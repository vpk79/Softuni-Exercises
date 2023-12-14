function oldBooks(input){
    let index = 0;
    let bookName = input[index];
    index++;
    let books = input[index];
    index++
    let bookCounter = 0;

    while(books !== bookName){
        
        
        if(books === "No More Books"){
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCounter} books.`);
            break;
        }

        books = input[index]
        index++;
        bookCounter++;
        
    }

    if(books){
        console.log(`You checked ${bookCounter} books and found it.`);
    }
}




oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

