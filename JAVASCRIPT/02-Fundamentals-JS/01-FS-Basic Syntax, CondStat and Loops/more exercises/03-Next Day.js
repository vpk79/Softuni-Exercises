function nextDay(year, month, day){
   
    let newDate = new Date(year, month-1, day+1)

    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth();
    let newDay = newDate.getDate();

    console.log(`${newYear}-${newMonth+1}-${newDay}`);
}


nextDay(2016, 9, 30);
nextDay(2020, 3, 24 )