function deleteByEmail() {
    
    const email = document.querySelector('input[name = email]').value;

    let tableRows = document.querySelectorAll('#customers tbody tr');

    let tableBody = document.querySelector('#customers tbody')

    let tableRowsArr = Array.from(tableRows);

    let result = document.getElementById('result');

    let deleted = false;

    for(let i = 0; i < tableRowsArr.length; i++){
        let td = tableRowsArr[i].children[1];
        if(td.textContent === email){
            tableBody.removeChild(tableRowsArr[i])
            deleted = true;
        }
    }
    result.textContent = deleted ? 'Deleted.' : 'Not Found.'
}