function addItem() {
   
    const newLi = document.createElement('li');

    const text = document.getElementById('newItemText').value;

    newLi.innerText = text;

    const uList = document.getElementById('items');

    uList.appendChild(newLi);

}