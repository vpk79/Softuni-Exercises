function solve() {
  let rightAnswers = 0;
  let counter = 0;
  const answers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  const resultTxt = document.querySelector('#results li h1');
  const sections = Array.from(document.querySelectorAll('section'));
  sections.map(section => {
       section.addEventListener('click', (event) => {
         if (event.target.className === 'answer-text') checkAnswer(event);
    })
  });

  function checkAnswer(event) {
    if (answers.includes(event.target.textContent)) rightAnswers++;
    sections[counter].style.display = 'none';
    counter++;
    if (counter === 3) {
    result(rightAnswers);
    return;
  }
    sections[counter].style.display = 'block';
  }
  
  function result(number) {
    resultTxt.parentElement.parentElement.style.display = 'block';
   number === 3 ? resultTxt.textContent = "You are recognized as top JavaScript fan!" : resultTxt.textContent = `You have ${number} right answers`
    }
}









//   const mainDiv = document.getElementById('quizzie');
//   const sections = Array.from(document.querySelectorAll('section'));
//   const section1 = sections[0];
//   const section2 = sections[1];
//   const section3 = sections[2];
//   const resultTxt = document.querySelector('#results li h1');

//   let rightAnswers = 0;

//   mainDiv.addEventListener('click', checkAnswer1);

//   function checkAnswer1(event) {

//     if (event.target.className === 'answer-text') {
//       if (event.target.textContent === 'onclick') rightAnswers++;

//       section1.style.display = 'none';
//       section2.style.display = 'block';
//       mainDiv.removeEventListener('click', checkAnswer1);
//       mainDiv.addEventListener('click', checkAnswer2);
//     }
//   }

//   function checkAnswer2(event) {
//     if (event.target.textContent === 'JSON.stringify()') rightAnswers++;

//     section2.style.display = 'none';
//     section3.style.display = 'block';
//     mainDiv.removeEventListener('click', checkAnswer2);
//     mainDiv.addEventListener('click', checkAnswer3);
//   }

//   function checkAnswer3(event) {
//     if (event.target.textContent === 'A programming API for HTML and XML documents') rightAnswers++;
//     section3.style.display = 'none';
//     result(rightAnswers);
//   }

//   let string = '';
//   function result(number) {
//     if (number === 3) {
//       string = "You are recognized as top JavaScript fan!";
//     }
//     else {
//       string = `You have ${number} right answers`
//     }
//     resultTxt.parentElement.parentElement.style.display = 'block';

//     resultTxt.textContent = string;
//   }
// 
