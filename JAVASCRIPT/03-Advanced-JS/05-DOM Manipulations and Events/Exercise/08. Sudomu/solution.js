function solve() {

    const buttons = document.querySelectorAll('button');
    const btnCheck = buttons[0];
    const btnClear = buttons[1];
    const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    const table = document.getElementsByTagName('table')[0]
    const print = document.querySelector('#check p');

    btnCheck.addEventListener('click', () => {
        let solved = true;
        let rowSum = 0;
        let colsSum = 0;
        // debugger
        for (let i = 0; i < inputs.length; i += 3) {
            rowSum = Number(inputs[i].value) + Number(inputs[i + 1].value) + Number(inputs[i + 2].value);
            if (rowSum !== 6) {
                solved = false;
                break;
            }
        }
        for (let i = 0; i < 3; i++) {
            colsSum = Number(inputs[i].value) + Number(inputs[i + 3].value) + Number(inputs[i + 6].value);
            if (colsSum !== 6) {
                solved = false;
                break;
            }
        }

        if (solved) {
            table.style.border = '2px solid green';
            print.style.color = 'green';
            print.textContent = "You solve it! Congratulations!";
        } else {
            table.style.border = '2px solid red';
            print.style.color = 'red';
            print.textContent = "NOP! You are not done yet..."
        }
    })

    btnClear.addEventListener('click', () => {
        table.style.border = 'none';
        print.textContent = '';

        for (let input of inputs) {
            input.value = '';
        }
    })
}