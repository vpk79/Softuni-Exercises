function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let add = document.getElementById('add');
    let sections = Array.from(document.querySelectorAll('section'));
    let addTask = sections[0];
    let open = sections[1].children[1];
    let inProgress = sections[2].children[1];
    let complete = sections[3].children[1];
    
    add.addEventListener('click', (event) => {
        event.preventDefault();
        
        if (task.value && description.value && date.value) {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = task.value;
            let p1 = document.createElement('p');
            p1.textContent = `Description: ${description.value}`;
            let p2 = document.createElement('p');
            p2.textContent = `Due Date: ${date.value}`;
            let div = document.createElement('div');
            div.className = 'flex';
            let button1 = document.createElement('button');
            button1.className = 'green';
            button1.innerText = 'Start';

            let button2 = document.createElement('button');
            button2.className = 'red';
            button2.innerText = 'Delete';
            
            div.appendChild(button1);
            div.appendChild(button2);
            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(div);
            open.appendChild(article);

            button1.addEventListener('click', eventHandler)
            button2.addEventListener('click', deleteEl)

            function eventHandler(event){
                // debugger
             console.log(event.target);
                if(event.target.className === 'green' && event.target.tagName === 'BUTTON'){
                    moveToProgress();
                } else if (event.target.className === 'red' && event.target.tagName === 'BUTTON') {
                    button1.parentElement.parentElement.parentElement.removeChild(article);
                } else if (event.target.className === 'orange' && event.target.tagName === 'BUTTON'){
                    moveToComplete();
                }
                
            }

            function moveToProgress(){
                button1.parentElement.parentElement.parentElement.removeChild(article);
                inProgress.appendChild(article);
                button1.classList = 'red';
                button1.innerText = 'Delete'
                button2.classList = 'orange';
                button2.innerText = 'Finish';
            }

            function moveToComplete(){
                button2.parentElement.parentElement.parentElement.removeChild(article);
            }

            function deleteEl(){
                button2.parentElement.parentElement.remove()
                button2.parentElement.remove()
                complete.appendChild(article);
            }
        }
    })
}