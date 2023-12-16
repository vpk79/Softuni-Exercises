window.addEventListener('load', solution);

function solution() {
  
  let backupData = {};

  const employee = document.querySelector('#employee');
  const category = document.querySelector('#category');
  const urgency = document.querySelector('#urgency');
  const team = document.querySelector('#team');
  const description = document.querySelector('#description');

  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolveList = document.querySelector('.resolved-list');

  const addBtn = document.querySelector('#add-btn');

  const li = document.createElement('li');
  li.className = 'problem-content';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';

  const continueBtn = document.createElement('button');
  continueBtn.className = 'continue-btn';
  continueBtn.textContent = 'Continue';

  const resolveBtn = document.createElement('button');
  resolveBtn.className = 'resolve-btn';
  resolveBtn.textContent = 'Resolved';

  const clearBtn = document.createElement('button');
  clearBtn.className = 'clear-btn';
  clearBtn.textContent = 'Clear';

  addBtn.addEventListener('click', add);

  li.addEventListener('click', (event)=> {
    if(event.target.tagName === 'BUTTON'){
      if(event.target.textContent === 'Edit'){
        edit();
      } else if (event.target.textContent === 'Continue'){
        next();
      } else if (event.target.textContent === 'Resolved'){
        resolve();
      } else if (event.target.textContent === 'Clear'){
        clear();
      }
    }
  })


  function add(event){
    event.preventDefault();

    if([employee.value, category.value, urgency.value, team.value, description.value].some(x => x === '')) return;

    backupData = {
      employee: employee.value,
      category: category.value,
      urgency: urgency.value,
      team: team.value,
      description: description.value
    }


    li.innerHTML= `
    <article>
        <p>From: ${employee.value}</p>
        <p>Category: ${category.value}</p>
        <p>Urgency: ${urgency.value}</p>
        <p>Assigned to: ${team.value}</p>
        <p>Description: ${description.value}</p>
    </article>`;

    previewList.appendChild(li);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    addBtn.setAttribute('disabled', 'true');
    document.querySelector('form').reset();
  }

  function edit(){

    employee.value = backupData.employee;
    Array.from(document.querySelector('#category').options).forEach(option => {
      if (option.value === backupData.category) option.selected = true;
    })

    Array.from(document.querySelector('#urgency').options).forEach(option => {
      if (option.value === backupData.urgency) option.selected = true;
    })

    Array.from(document.querySelector('#team').options).forEach(option => {
      if (option.value === backupData.team) option.selected = true;
    })

    description.value = backupData.description;

    editBtn.remove();
    continueBtn.remove();
    li.remove();
    addBtn.removeAttribute('disabled');
  }

  function next(){
    
    continueBtn.remove();
    editBtn.remove();
    pendingList.appendChild(li);
    li.appendChild(resolveBtn);
  }

  function resolve() {
    
    resolveBtn.remove();
    resolveList.appendChild(li);
    li.appendChild(clearBtn);
  }

  function clear(){
    clearBtn.remove();
    li.remove();
  }
}


    
    
