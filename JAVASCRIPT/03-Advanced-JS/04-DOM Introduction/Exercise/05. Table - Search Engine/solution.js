function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      const searchText = document.getElementById('searchField').value;

      const tableRows = Array.from(document.querySelectorAll('tbody > tr'));
      
      for(let row of tableRows){
         if(row.textContent.includes(searchText) && searchText !== ''){
            row.classList.add('select');
         } else {
            row.classList.remove('select')
         }
      }
      document.getElementById('searchField').value = "";
   }
}