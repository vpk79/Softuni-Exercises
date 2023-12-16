window.addEventListener('load', solve);

function solve() {

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let contactNumber = document.getElementById('contact-number');
    let classType = document.getElementById('class-type');
    let classTime = document.getElementById('class-time');

    let nextBtn = document.getElementById('next-btn');

    let inputs = [name, email, contactNumber, classType, classTime];

    let previewSection = document.querySelector('.class-info');
    let confirmSection = document.getElementsByClassName('confirm-class');
    let main = document.getElementById('main');
    let body = document.getElementById('body');
    let backupValues = {};

    nextBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let checkInputs = inputs.some(x => x.value === '');
        if (checkInputs) return;

        backupValues = {
            name: name.value,
            email: email.value,
            contactNumber: contactNumber.value,
            classType: classType.value,
            classTime: classTime.value
        }

        let element = document.createElement('li');
        element.className = "info-item";
        element.innerHTML = `
        <article class="personal-info">
        <p>${name.value}</p>
        <p>${email.value}</p>
        <p>${contactNumber.value}</p>
        <p>${classType.value}</p>
        <p>${classTime.value}</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`;

        previewSection.appendChild(element);

        inputs.forEach(x => x.value = '');
        nextBtn.disabled = true;

        let previewButtons = element.querySelectorAll('button')
        let editBtn = previewButtons[0];
        let continueBtn = previewButtons[1];

        editBtn.addEventListener('click', (e) => {
            name.value = backupValues.name;
            email.value = backupValues.email;
            contactNumber.value = backupValues.contactNumber;
            classType.value = backupValues.classType;
            classTime.value = backupValues.classTime;
            nextBtn.disabled = false;
            element.remove();
        })

        continueBtn.addEventListener('click', (e) => {
            confirmSection[0].appendChild(element);
            element.className = 'continue-info';
            element.removeChild(editBtn);
            element.removeChild(continueBtn);
            let cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.innerText = 'Cancel';
            let confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.innerText = 'Confirm';
            element.appendChild(cancelBtn);
            element.appendChild(confirmBtn);

            cancelBtn.addEventListener('click', (e) => {
                element.remove();
                nextBtn.disabled = false;
            })

            confirmBtn.addEventListener('click', (e) => {
                main.parentElement.removeChild(main);
                let h1 = document.createElement('h1');
                h1.id = 'thank-you'
                h1.innerText = 'Thank you for scheduling your appointment, we look forward to seeing you!'
                let doneBtn = document.createElement('button');
                doneBtn.innerText = 'Done';
                doneBtn.id = 'done-btn';
                body.appendChild(h1);
                body.appendChild(doneBtn);

                doneBtn.addEventListener('click', () => {
                    location.reload();
                })
            })
        })
    })
}




