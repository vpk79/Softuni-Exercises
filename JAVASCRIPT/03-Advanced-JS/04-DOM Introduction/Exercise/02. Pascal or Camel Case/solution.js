function solve() {
  let text = document.getElementById('text').value;

  let convetion = document.getElementById('naming-convention').value;

  let result = document.getElementById('result')

  let textArr = text.split(" ");
  let output = "";
  
  if (convetion === "Camel Case") {
    textArr = textArr.map(x => x.toLowerCase());
    textArr = textArr.map((x, index) => {
      if (index < 1) {
        return x;
      } else {
        x = x.slice(0, 1).toUpperCase() + x.slice(1)
        return x;
      }
    });
     output = textArr.join("");


  } else if (convetion === "Pascal Case") {
    textArr = textArr.map(x => x.toLowerCase());
    textArr = textArr.map(x => x.slice(0, 1).toUpperCase() + x.slice(1));
    output = textArr.join("");
  } else {
    output = "Error!"
  }

result.textContent = output;
  
}