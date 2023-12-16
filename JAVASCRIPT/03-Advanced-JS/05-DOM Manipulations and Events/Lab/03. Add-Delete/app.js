function addItem() {
    const text = document.getElementById('newItemText').value;
    const ul = document.getElementById('items');

    const newLi = document.createElement('li');
    newLi.textContent = text;
   
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.innerText = '[Delete]';
    newLink.addEventListener('click', ()=> newLi.remove());

    newLi.appendChild(newLink);

    ul.appendChild(newLi);
}

