function generateReport() {

    const output = document.querySelector('#output');

    const result = [];

    const checks = Array.from(document.querySelectorAll('thead tr th input'));

    const tableRow = Array.from(document.querySelectorAll('tbody tr'));

   tableRow.forEach(row => {
    const current = {};
    Array.from(row.querySelectorAll('td')).forEach((td, i) => {
        if(checks[i].checked){
            current[checks[i].name] = td.textContent
        }
    })

    result.push(current)
   })
   output.value = JSON.stringify(result)
}