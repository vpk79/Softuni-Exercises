function shoppingList(input){
    let listOfProducts = input.shift().split("!")

    for(const sentence of input){
        if(sentence === "Go Shopping!"){
            break;
        }
        let sentenceArray = sentence.split(" ");
        let[command, product, newProduct] = sentenceArray;

        switch(command){
            case 'Urgent':
                !listOfProducts.includes(product) ? listOfProducts.unshift(product) : void(0);
                break;

            case 'Unnecessary':
                listOfProducts.includes(product) ? listOfProducts = listOfProducts.filter(x => x !== product) :
                 void(0);
                 break;
            case 'Correct': 
                if(listOfProducts.includes(product)){
                    let index = listOfProducts.indexOf(product);
                    listOfProducts[index] = newProduct;
                }
                break;
            case 'Rearrange':
                if(listOfProducts.includes(product)){
                    let index = listOfProducts.indexOf(product);
                    let item = listOfProducts.splice(index, 1);
                    listOfProducts.push(item);
                }

                break;
        }   

    }
       
    
    console.log(listOfProducts.join(", "));
}







shoppingList(([
"Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
)

shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)