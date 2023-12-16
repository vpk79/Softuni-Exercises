// function sumTable() {
// const rows = document.querySelectorAll('table tr');

// let rowsArr = Array.from(rows);

// let sum = 0;

// console.log(sum);
// for (let i = 1; i < rowsArr.length - 1; i++){
//    let array = rowsArr[i].textContent.split(" ");
//    let cost = array[array.length -1 ]
//     debugger
//    sum += Number(cost);
//    console.log(sum);

//    }
//    console.log(sum);

//    document.getElementById('sum').textContent = sum;

// }



function sumTable() {
    const rows = document.querySelectorAll('table tr');

    let sum = 0;
    for (let i = 1; i < rows.length -1; i++) {
        let cols = rows[i].children;
        let cost = cols[cols.length - 1].textContent;
       
        sum += Number(cost);

    }
    
    document.getElementById('sum').textContent = sum;
}