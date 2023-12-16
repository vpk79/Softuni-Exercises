function solve() {
    let[name, hall, ticketPrice] = Array.from(document.querySelectorAll('input'));
    let[movies, archive] = Array.from(document.querySelectorAll('ul'));
    let[btnScreen, btnClear] = Array.from(document.querySelectorAll('button'));

    btnScreen.addEventListener('click', add);
    btnClear.addEventListener('click', ()=>{
        archive.innerHTML = '';
    })

    function add(event){
        event.preventDefault();
        if (name.value && hall.value && ticketPrice.value && !isNaN(ticketPrice.value)) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = name.value;
            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall.value}`
            let div = document.createElement('div');
            let strong2 = document.createElement('strong');
            strong2.textContent = Number(ticketPrice.value).toFixed(2);
            let input = document.createElement('input');
            input.placeholder = "Tickets Sold";
            let btnArchive1 = document.createElement('button');
            btnArchive1.innerText = 'Archive'
            
            div.appendChild(strong2);
            div.appendChild(input);
            div.appendChild(btnArchive1);
            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);
            movies.appendChild(li);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';

            btnArchive1.addEventListener('click', archiveFunc)

            function archiveFunc(event){
                let btnDel;
                if(input.value && !isNaN(input.value)){
                    li.remove();
                    li.removeChild(div);
                    let totalPrice = Number(strong2.textContent) * Number(input.value);
                    strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`
                    btnDel = document.createElement('button');
                    btnDel.innerText = 'Delete';
                    li.appendChild(btnDel);
                    archive.appendChild(li);
                }

                btnDel.addEventListener('click', ()=>{
                    li.remove();
                })
            }
        }

    }
}