function create(words) {
  
// debugger
   for(let string of words){
     let newDiv = document.createElement('div');
     let newParagraph = document.createElement('p');
     newParagraph.textContent = string;
     newParagraph.style.display = 'none';
     newDiv.appendChild(newParagraph);
     newDiv.addEventListener('click', (event) => {
     event.target.querySelector('p').style.display = ''
     })
      document.getElementById('content').appendChild(newDiv);
   }
}