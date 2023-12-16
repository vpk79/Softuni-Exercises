function solve(input){

    let juices = {};
    let bottles = new Map();

    for(let entry of input){
        let[juice, quantity] = entry.split(' => ');
        quantity = Number(quantity);

        if(!juices[juice]){
            juices[juice] = 0;
        } 

        juices[juice] += quantity;

        if(juices[juice] >= 1000){
            let newBottles = Math.trunc(juices[juice] / 1000);
            if(!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + newBottles);

            juices[juice] -= newBottles * 1000;
        }
    }

   for(let [key, value] of bottles){
    console.log(`${key} => ${value}`);
   }

}




solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])