function gladiatorExpenses(losts, helmet, sword, shield, armor){
    let sum = 0;

    for(let i = 1; i <= losts; i++){
        i % 2 === 0 ? sum += helmet : null;
        i % 3 === 0 ? sum += sword : null;
        i % 6 === 0 ? sum += shield : null;
        i % 12 === 0 ? sum += armor : null;
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}



gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )