function schoolRegister(arr) {
    let gradeMap = {};
    

for(let line of arr){
    let splitLine = line.split(/[:,]/).map(x => x.trim()).map(x => isNaN(x) ? x : Number(x));
    let name = splitLine[1];
    let grade = splitLine[3];
    let score = splitLine[5];

    if(score < 3) continue;

    if (gradeMap[grade]) {
        gradeMap[grade].names.push(name);
        gradeMap[grade].totalScore += score;
        gradeMap[grade].count += 1;
      } else {
        gradeMap[grade] = {
          names: [name],
          totalScore: score,
          count: 1
        }
      }
}

let sortedGrades = Object.keys(gradeMap).sort((a, b) => a - b);

for (let grade of sortedGrades) {
    let gradeInfo = gradeMap[grade];
    let namesString = gradeInfo.names.join(", ");
    let averageScore = gradeInfo.totalScore / gradeInfo.count;
    console.log(`${Number(grade) + 1} Grade
    List of students: ${namesString}
    Average annual score from last year: ${averageScore.toFixed(2)}`);
    console.log("");
  }

}




schoolRegister([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])