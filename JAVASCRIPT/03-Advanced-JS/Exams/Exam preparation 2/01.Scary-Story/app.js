window.addEventListener("load", solve);

function solve() {

  let backupData = {};

  //---get referencies
  const form = document.querySelector('form');
  const firstName = document.querySelector('#first-name');
  const lastname = document.querySelector('#last-name');
  const age = document.querySelector('#age');
  const storyTitle = document.querySelector('#story-title');
  const genre = document.querySelector('#genre');
  const story = document.querySelector('#story');

  const ulPreview = document.querySelector('#preview-list')
  const publishBtn = document.querySelector('#form-btn');

  //----create elemenets
  const li = document.createElement('li');
  li.className = 'story-info';

  const btnSave = document.createElement('button');
  btnSave.textContent = 'Save Story';
  btnSave.className = 'save-btn';

  const btnEdit = document.createElement('button');
  btnEdit.textContent = 'Edit Story';
  btnEdit.className = 'edit-btn';

  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Delete Story';
  btnDelete.className = 'delete-btn';


  //---set listeners
  publishBtn.addEventListener('click', submit);
  li.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.textContent === 'Save Story') {
        saveStory();
      } else if (event.target.textContent === 'Edit Story') {
        editStory();
      } else if (event.target.textContent === 'Delete Story') {
        deleteStory();
      }
    }
  })



  function submit(event) {

    event.preventDefault();

    backupData = {
      firstName: firstName.value,
      lastname: lastname.value,
      age: age.value,
      storyTitle: storyTitle.value,
      genre: genre.value,
      story: story.value
    }

    if (Object.values(backupData).some(x => x === '')) return;

    li.innerHTML = `
      <article>
        <h4>Name: ${firstName.value} ${lastname.value}</h4>
        <p>Age: ${age.value}</p>
        <p>Title: ${storyTitle.value}</p>
        <p>Genre: ${genre.value}</p>
        <p>${story.value}</p>
      </article>`


    ulPreview.appendChild(li);
    li.appendChild(btnSave);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    form.reset();

    publishBtn.setAttribute('disabled', 'true');


  }


  function saveStory() {
    document.querySelector('#main').innerHTML = `<h1>Your scary story is saved!</h1>`;
  }

  function editStory() {
   
    firstName.value = backupData.firstName;
    lastname.value = backupData.lastname;
    age.value = backupData.age;
    storyTitle.value = backupData.storyTitle;
    Array.from(genre.options).forEach(option => {
      if (option.value === backupData.genre) option.selected = true;
    })
    story.value = backupData.story;

    publishBtn.removeAttribute('disabled');

    li.remove();
    btnDelete.remove();
    btnEdit.remove();
    btnSave.remove();
  }

  function deleteStory() {
    li.remove();
    btnDelete.remove();
    btnEdit.remove();
    btnSave.remove();
    publishBtn.removeAttribute('disabled');

  }
}
