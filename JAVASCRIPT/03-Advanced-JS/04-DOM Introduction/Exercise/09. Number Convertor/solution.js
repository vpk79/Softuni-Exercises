function solve() {

    const firstOptElement = document.createElement('option');
    const secondOptElement = document.createElement('option');

    firstOptElement.value = 'binary';
    secondOptElement.value = 'hexadecimal';

    firstOptElement.textContent = 'Binary';
    secondOptElement.textContent = 'Hexadecimal';

    const menuTo = document.getElementById('selectMenuTo');
    menuTo.appendChild(firstOptElement);
    menuTo.appendChild(secondOptElement);

    const ConvertBtn = document.querySelector('button');

    ConvertBtn.addEventListener('click', () => {
        const numberInput = document.getElementById('input');
        const outputResult = document.getElementById('result')
        if(menuTo.value === 'binary'){
            outputResult.value = Number(numberInput.value).toString(2);
        } else if(menuTo.value = 'hexadecimal'){
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    })
    
   
}