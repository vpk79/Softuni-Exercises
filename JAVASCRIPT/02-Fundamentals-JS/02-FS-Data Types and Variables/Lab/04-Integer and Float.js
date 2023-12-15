function integerAndFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`);
}


integerAndFloat(9, 100, 1.1)