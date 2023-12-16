window.addEventListener('load', solve);

function solve() {

        // let backupData = {
        //         carModel: document.querySelector('#car-model'),
        //         carYear: document.querySelector('#car-year'),
        //         partName: document.querySelector('#part-name'),
        //         partNumber: document.querySelector('#part-number'),
        //         condition: document.querySelector('#condition')
        // };

        let backupData = {};
        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let parNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');

        const form = document.querySelector('form')
        // form.addEventListener('submit', submit);
        document.querySelector('#next-btn').addEventListener('click', submit);

        const infoList = document.querySelector('.info-list');
        const confirmList = document.querySelector('.confirm-list')
        const li = document.createElement('li');
        li.className = 'part-content';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.textContent = 'Confirm';

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';

        li.addEventListener('click', (event) => {
                if (event.target.tagName === 'BUTTON') {
                        let command = event.target.textContent
                        if (command === 'Edit') {
                                edit();
                        } else if (command === 'Continue') {
                                next();
                        } else if (command === 'Confirm') {
                                confirm();
                        } else if (command === 'Cancel') {
                                cancel();
                        }
                }
        })

        function submit(event) {
                event.preventDefault();

                document.querySelector('#complete-img').style.visibility = 'hidden';
                document.querySelector('#complete-text').textContent = '';

                // const formData = new FormData(event.target.parentElement);
                // const entries = [...formData.entries()];
                // const carModel = formData.get('car-model');
                // const carYear = formData.get('car-year');
                // const partName = formData.get('part-name');
                // const partNumber = formData.get('part-number');
                // const condition = formData.get('condition');

                // backupData = Object.fromEntries(formData.entries())
                // backupData.carModel = carModel;

                const carModel = document.querySelector('#car-model').value;
                const carYear = document.querySelector('#car-year').value;
                const partName = document.querySelector('#part-name').value;
                const partNumber = document.querySelector('#part-number').value;
                const condition = document.querySelector('#condition').value


                backupData = {
                                carModel,
                                carYear,
                                partName,
                                partNumber,
                                condition
                        }
                

                if (carModelElement.value == ''
                        || carYearElement.value == ''
                        || partNameElement.value == ''
                        || parNumberElement.value == ''
                        || conditionElement.value == ''
                ) {
                        return;
                }
                let Year = Number(carYearElement.value);

                if (Year < 1980 || Year > 2023) {
                        return;
                }

                li.innerHTML =
                        `<article>
                        <p>Car Model: ${carModel}</p>
                        <p>Car Year: ${carYear}</p>
                        <p>Part Name: ${partName}</p>
                        <p>Part Number: ${partNumber}</p>
                        <p>Condition: ${condition}</p>
                </article>`


                li.appendChild(editBtn);
                li.appendChild(continueBtn);
                infoList.appendChild(li);

                document.querySelector('#next-btn').disabled = true;
                // event.target.parentElement.reset();

                carModelElement.value = '';
                carYearElement.value = '';
                partNameElement.value = '';
                parNumberElement.value = '';
                conditionElement.value = '';

        }

        function edit() {

                console.log(backupData);
                form.querySelector('#car-model').value = backupData.carModel;
                form.querySelector('#car-year').value = backupData.carYear;
                form.querySelector('#part-name').value = backupData.partName;
                form.querySelector('#part-number').value = backupData.partNumber;
                Array.from(form.querySelector('#condition').options).forEach(function (option) {
                        if (option.value === backupData.condition) option.selected = true;
                })
                document.querySelector('#next-btn').disabled = false;
                infoList.innerHTML = '';
                editBtn.remove();
                continueBtn.remove();
        }

        function next() {
                editBtn.remove();
                continueBtn.remove();

                li.appendChild(confirmBtn);
                li.appendChild(cancelBtn);

                confirmList.appendChild(li);
        }

        function confirm(event) {
                li.remove();
                document.querySelector('#next-btn').disabled = false;
                document.querySelector('#complete-img').style.visibility = 'visible';
                document.querySelector('#complete-text').textContent = 'Part is Ordered!';

        }

        function cancel(event) {
                li.remove();
                document.querySelector('#next-btn').disabled = false;
        }
        
}



// const li = document.createElement('li');
// li.className = 'part-content';
// li.addEventListener('click', command);
// let form = document.querySelector('form');
// form.addEventListener('submit', next);

// function next(event) {
//         event.preventDefault();

//         document.querySelector('#complete-img').style.visibility = 'hidden';
//         document.querySelector('#complete-text').textContent = '';

//         // const formData = new FormData(form);
//         // const carModel = formData.get('car-model')
//         const carModel = document.querySelector('#car-model').value;
//         const carYear = document.querySelector('#car-year').value;
//         const partName = document.querySelector('#part-name').value;
//         const partNumber = document.querySelector('#part-number').value;
//         const condition = document.querySelector('#condition').value

//         li.innerHTML = `
//         <article>
//                 <p>Car Model: ${carModel}</p>
//                 <p>Car Year: ${carYear}</p>
//                 <p>Part Name: ${partName}</p>
//                 <p>Part Number: ${partNumber}</p>
//                 <p>Condition: ${condition}</p>
//         </article>`

//         document.querySelector('.info-list').appendChild(li);
//         form.reset();
// }


// function command() {

// }









// let backupData = {};

// let carModelElement = document.getElementById('car-model');
// let carYearElement = document.getElementById('car-year');
// let partNameElement = document.getElementById('part-name');
// let parNumberElement = document.getElementById('part-number');
// let conditionElement = document.getElementById('condition');

// const form = document.querySelector('form')
// // form.addEventListener('submit', submit);
// document.querySelector('#next-btn').addEventListener('click', submit);

// const infoList = document.querySelector('.info-list');
// const confirmList = document.querySelector('.confirm-list')
// const li = document.createElement('li');
// li.className = 'part-content';

// const editBtn = document.createElement('button');
// editBtn.className = 'edit-btn';
// editBtn.textContent = 'Edit';

// const continueBtn = document.createElement('button');
// continueBtn.className = 'continue-btn';
// continueBtn.textContent = 'Continue';

// const confirmBtn = document.createElement('button');
// confirmBtn.className = 'confirm-btn';
// confirmBtn.textContent = 'Confirm';

// const cancelBtn = document.createElement('button');
// cancelBtn.className = 'cancel-btn';
// cancelBtn.textContent = 'Cancel';

// li.addEventListener('click', (event) => {
//         if (event.target.tagName === 'BUTTON') {
//                 let command = event.target.textContent
//                 if (command === 'Edit') {
//                         edit();
//                 } else if (command === 'Continue') {
//                         next();
//                 } else if (command === 'Confirm') {
//                         confirm();
//                 } else if (command === 'Cancel') {
//                         cancel();
//                 }
//         }
// })

// function submit(event) {
//         event.preventDefault();

//         document.querySelector('#complete-img').style.visibility = 'hidden';
//         document.querySelector('#complete-text').textContent = '';

//         // const formData = new FormData(event.target.parentElement);
//         // const entries = [...formData.entries()];
//         // const carModel = formData.get('car-model');
//         // const carYear = formData.get('car-year');
//         // const partName = formData.get('part-name');
//         // const partNumber = formData.get('part-number');
//         // const condition = formData.get('condition');

//         // backupData = Object.fromEntries(formData.entries())

        
//         const carModel = document.querySelector('#car-model').value;
//         const carYear = document.querySelector('#car-year').value;
//         const partName = document.querySelector('#part-name').value;
//         const partNumber = document.querySelector('#part-number').value;
//         const condition = document.querySelector('#condition').value

//         backupData = {
//                 carModel,
//                 carYear,
//                 partName,
//                 partNumber,
//                 condition
//         }

//         if (carModelElement.value == ''
//                 || carYearElement.value == ''
//                 || partNameElement.value == ''
//                 || parNumberElement.value == ''
//                 || conditionElement.value == ''
//         ) {
//                 return;
//         }
//         let Year = Number(carYearElement.value);

//         if (Year < 1980 || Year > 2023) {
//                 return;
//         }

//         li.innerHTML =
//                 `<article>
//                         <p>Car Model: ${carModel}</p>
//                         <p>Car Year: ${carYear}</p>
//                         <p>Part Name: ${partName}</p>
//                         <p>Part Number: ${partNumber}</p>
//                         <p>Condition: ${condition}</p>
//                 </article>`


//         li.appendChild(editBtn);
//         li.appendChild(continueBtn);
//         infoList.appendChild(li);

//         document.querySelector('#next-btn').disabled = true;
//         // event.target.parentElement.reset();

//         carModelElement.value = '';
//         carYearElement.value = '';
//         partNameElement.value = '';
//         parNumberElement.value = '';
//         conditionElement.value = '';

// }

// function edit(event) {
//         form.querySelector('#car-model').value = backupData['car-model'];
//         form.querySelector('#car-year').value = backupData['car-year'];
//         form.querySelector('#part-name').value = backupData['part-name'];
//         form.querySelector('#part-number').value = backupData['part-number'];
//         Array.from(form.querySelector('#condition').options).forEach(function (option) {
//                 if (option.value === backupData.condition) option.selected = true;
//         })
//         document.querySelector('#next-btn').disabled = false;
//         infoList.innerHTML = '';
//         editBtn.remove();
//         continueBtn.remove();
// }

// function next(event) {
//         editBtn.remove();
//         continueBtn.remove();

//         li.appendChild(confirmBtn);
//         li.appendChild(cancelBtn);

//         confirmList.appendChild(li);
// }

// function confirm(event) {
//         li.remove();
//         document.querySelector('#next-btn').disabled = false;
//         document.querySelector('#complete-img').style.visibility = 'visible';
//         document.querySelector('#complete-text').textContent = 'Part is Ordered!';

// }

// function cancel(event) {
//         li.remove();
//         document.querySelector('#next-btn').disabled = false;
// }