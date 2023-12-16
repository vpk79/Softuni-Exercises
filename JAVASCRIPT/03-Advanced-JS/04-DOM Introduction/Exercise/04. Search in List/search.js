function search() {
   const townList = document.querySelectorAll('ul li');
   let counter = 0;
   for(let li of townList){
      li.style['text-decoration'] = 'none';
      li.style['font-weight'] = 'normal';
   }

   const searchText = document.getElementById('searchText').value;

 

   for(let li of townList){
      if(li.textContent.includes(searchText) && searchText !== ""){
         li.style['text-decoration'] = 'underline';
         li.style['font-weight'] = 'bold';
         counter++;
      }
   }

   document.getElementById('result').textContent = `${counter} matches found`
}
