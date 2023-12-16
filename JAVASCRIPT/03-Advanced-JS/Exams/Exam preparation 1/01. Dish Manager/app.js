window.addEventListener("load", solve);

function solve() {


  let backupData = {};     // backup for fields data

  // fields selectors
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const age = document.querySelector('#age');
  const gender = document.querySelector('#genderSelect');
  const task = document.querySelector('#task');

  // ul selectors
  const ulInProgress = document.querySelector('#in-progress');
  const ulFinished = document.querySelector('#finished');

  // counter
  const progressCount = document.querySelector('#progress-count');



  // prepare our li element and atach listener

  const li = document.createElement('li');
  li.className = 'each-line';

  li.addEventListener('click', (event) => {
    let command = event.target.textContent;
    switch (command) {
      case 'Edit': edit(); break;
      case 'Mark as complete': complete(); break;
    }
  })
  // add important listeners

  document.querySelector('#form-btn').addEventListener('click', submit);
  document.querySelector('#clear-btn').addEventListener('click', clear);

  // create buttons for our li element

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Mark as complete';
  completeBtn.className = 'complete-btn';


  function submit(event) {
    event.preventDefault();

    // check all fields for non-empty input
    if ([firstName.value, lastName.value, age.value, task.value].some(x => x === '')) return;

    // backup all values
    backupData = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      task: task.value,
      gender: gender.value
    }

    li.innerHTML = `
      <article>
          <h4>${firstName.value} ${lastName.value}</h4>
          <p>${gender.value}, ${age.value}</p>
          <p>Dish description: ${task.value}</p>
      </article>`
      
    progressCount.textContent++;   // increase counter

    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    ulInProgress.appendChild(li);

    document.querySelector('form').reset();  // clear all form fields

  }

  function edit() {
    firstName.value = backupData.firstName;
    lastName.value = backupData.lastName;
    age.value = backupData.age;
    task.value = backupData.task;
    Array.from(document.querySelector('#genderSelect').options).forEach(option => {
      if (option.value === backupData.gender) option.selected = true;
    })

    progressCount.textContent--; // decrease counter

    li.innerHTML = '';  // remove li content and buttons
    li.remove();
  }

  function complete() {
    ulFinished.appendChild(li);    // re-atach our li element
    progressCount.textContent--;  // decrease counter
    // remove buttons
    editBtn.remove(); 
    completeBtn.remove();
  }

  function clear() {
    ulFinished.innerHTML = '';  // clear all ul content
  }

}


