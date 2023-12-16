function solve(input){

    let week = {
        Monday : 1,
        Tuesday : 2,
        Wednesday : 3,
        Thursday : 4,
        Friday : 5,
        Saturday : 6,
        Sunday : 7,
    }

    if(week.hasOwnProperty(input)){
        console.log(week[input]);
    } else{
        console.log('error');
    }

}




solve('Monday')
solve('Invalid')