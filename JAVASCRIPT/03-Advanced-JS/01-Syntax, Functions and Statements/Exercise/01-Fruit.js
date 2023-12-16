function solve(fruit, weight, kgPrice){

    let kilos = weight / 1000;

    let sum = kgPrice * kilos;

    console.log(`I need $${sum.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}



solve('orange', 2500, 1.80)