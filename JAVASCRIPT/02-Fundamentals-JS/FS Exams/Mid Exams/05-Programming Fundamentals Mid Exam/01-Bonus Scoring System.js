function bonusScoringSystem(input){
    let students = Number(input[0]);
    let lectures = Number(input[1]);
    let addBonus = Number(input[2]);
    let totalBonus = 0;
    let maxBonus = 0;
    let maxAttendances = 0;

    for(let i = 3; i < input.length; i++){
        let attendances = Number(input[i])

        totalBonus = (attendances / lectures) * (5 + addBonus);

        if(totalBonus > maxBonus){
            maxBonus = totalBonus;
            maxAttendances = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}



// bonusScoringSystem([
//     '5',  '25', '30',
//     '12', '19', '24',
//     '16', '20'
//   ])

// bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
bonusScoringSystem(['10', '30', '14']);