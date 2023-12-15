function solve(input) {
    let schoolGrades = new Map();

    for (let line of input) {
        let lineArr = line.split(" ");
        let name = lineArr.shift()
        let grades = lineArr.join(" ");
        
        if (schoolGrades.has(name)) {
            let currentValue = schoolGrades.get(name);
            schoolGrades.set(name, (currentValue + " " + grades));
        } else {
            schoolGrades.set(name, grades)
        }
    }

    let sortedSchoolGrades = new Map([...schoolGrades].sort());
    
    for(let [name, grade] of sortedSchoolGrades){
        let avgGrade = grade.split(" ").map(Number).reduce((a,b) => a + b) / grade.split(" ").length
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}




solve([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)

// solve(['Steven 3 5 6 4',
//     'George 4 6',
//     'Tammy 2 5 3',
//     'Steven 6 3']
// )
// solve([
//     'Lilly 0 0 5.25 4.50',
//     'Tim 0 5',
//     'Tammy 0 2 0',
//     'Tim 6 6']
// )

// solve([' '])