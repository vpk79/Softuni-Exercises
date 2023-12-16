function extractText() {
   let items = document.getElementById('items').children
   const itemArr = Array.from(items)
    
    let text = itemArr.map(li => li.textContent).join("\n")
    let textArea = document.getElementById("result");
    textArea.value = text;
}




