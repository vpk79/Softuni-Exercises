function solve(input){

    let budget = input.shift();
    let students = input.shift();
    let flourPrice = input.shift();
    let eggPrice = input.shift();
    let apronPrice = input.shift();
    let freePackages = 0;

    if(students >= 5){
        freePackages = Math.floor(students / 5)
    }

    

    let sum = apronPrice * (Math.ceil(students * 1.20)) + eggPrice * 10 *(students) + 
    flourPrice * (students - freePackages);

    if(sum <= budget){
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);

    } else {
        sum -= budget;
        console.log(`${sum.toFixed(2)}$ more needed.`);
    }
}




solve([50,
    2,
    1.0,
    0.10,
    10.0])

solve([100,
    25,
    4.0,
    1.0,
    6.0])