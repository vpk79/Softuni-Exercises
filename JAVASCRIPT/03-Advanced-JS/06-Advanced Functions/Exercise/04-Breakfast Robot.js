function solution(input) {
  let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
  }

  let library = {
      apple: { carbohydrate: 1, flavour: 2},
      lemonade: { carbohydrate: 10, flavour: 20},
      burger: { carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, fat: 1, flavour: 1},
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
  }     

     function service(input){
        let [command, type, quantity] = input.split(' ');
        quantity = Number(quantity);
        if (command === 'restock') {
            storage[type] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
           for(let key in library[type]){
            if(storage[key] < library[type][key] * quantity){
                return `Error: not enough ${key} in stock`
            }
               storage[key] -= (library[type][key] * quantity);
        }
            return 'Success'
               
        } else if (command === 'report') {
            let result = []
            for(let key in storage){
                result.push(`${key}=${storage[key]}`);
            }
            return result.join(" ");
        }
    }  
    return service;
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare apple 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare burger 1"))
console.log(manager("report"))

