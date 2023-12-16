function addItem() {
    const elementText = document.getElementById('newItemText');
    const elementValue = document.getElementById('newItemValue');
    const dropMenu = document.getElementById('menu');

    let newOption = document.createElement('option');

    newOption.textContent = elementText.value;
    newOption.value = elementValue.value;

    dropMenu.appendChild(newOption);

    elementText.value = '';
    elementValue.value = '';

}