function solve(num1, num2, str) {
    let obj = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,

    }
    console.log(obj[str](num1, num2));
}



solve(5, 6, '+')
solve(3, 5.5, '*')