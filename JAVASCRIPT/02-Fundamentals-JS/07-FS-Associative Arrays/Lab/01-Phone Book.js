function solve(input){
    let phoneBook = new Map();

    for(let line of input){
        let[name, phone] = line.split(" ");
        phoneBook.set(name, phone);
    }

   for(let [key, value] of phoneBook){
    console.log(`${key} -> ${value}`);
   }

}



solve([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)