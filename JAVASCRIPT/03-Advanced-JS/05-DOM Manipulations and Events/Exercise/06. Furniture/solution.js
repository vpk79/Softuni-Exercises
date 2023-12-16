function solve() {

  const divBox = document.getElementById('exercise');
  const txtAreas = divBox.getElementsByTagName('textarea');
  const input = txtAreas[0];
  const output = txtAreas[1];

  divBox.addEventListener('click', (event) => {
    const textBtn = event.target.textContent;

    if(textBtn === 'Generate'){
      const inputObj = JSON.parse(input.value);
      generate(inputObj);
      
    } else if(textBtn === 'Buy'){
      buy();
    }
  })

  function generate(inputObj) {

    for (line of inputObj) {
      const tr = document.createElement('tr');
      const tdImg = document.createElement('td');
      const imgTag = document.createElement('img');
      imgTag.src = line.img;
      tdImg.appendChild(imgTag);

      const tdName = document.createElement('td');
      const p1 = document.createElement('p');
      p1.textContent = line.name;
      tdName.appendChild(p1);

      const tdPrice = document.createElement('td');
      const p2 = document.createElement('p');
      p2.textContent = line.price;
      tdPrice.appendChild(p2);

      const tdDecFactor = document.createElement('td');
      const p3 = document.createElement('p');
      p3.textContent = line.decFactor;
      tdDecFactor.appendChild(p3);

      const tdCheck = document.createElement('td');
      const check = document.createElement('input');
      check.type = 'checkbox';
      tdCheck.appendChild(check);

      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecFactor);
      tr.appendChild(tdCheck);

      document.getElementsByTagName('tbody')[0].appendChild(tr);

    }

  }

  function buy(){
    const checks = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let buyed = [];
    let sum = 0;
    let decFac = 0;
    counter = 0;

    for(const chbox of checks){
      if(chbox.checked){
        const row = Array.from(chbox.parentElement.parentElement.children)
        let furniture = row[1].firstChild.textContent;
        buyed.push(furniture);
        sum += Number(row[2].firstChild.textContent);
        decFac += Number(row[3].firstChild.textContent);
        counter ++;
      }
    }
    if(counter > 0){
      let finalOutput = `Bought furniture: ${buyed.join(', ')}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${decFac / counter}`

      output.value = finalOutput;
    }
  }
}