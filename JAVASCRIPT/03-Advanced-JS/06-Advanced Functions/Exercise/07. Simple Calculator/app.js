function calculator() {
    
    let num1, num2, result, sum;

    return {

         init: (selector1, selector2, resultSelector) =>{
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },

        add: () => {
            sum = Number(num1.value) + Number(num2.value);
            result.value = sum;
        },

        subtract: () => {
            sum = Number(num1.value) - Number(num2.value);
            result.value = sum;
        }
    }
   
   
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




