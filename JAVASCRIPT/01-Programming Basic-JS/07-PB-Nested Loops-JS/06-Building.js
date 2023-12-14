function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);


    for (let i = floors; i > 0; i--) {
        let roomNumbers = "";
        for (let j = 0; j < rooms; j++) {



            if (i == floors) {
                roomNumbers += `L${i}${j} `;

            } else if(i % 2 == 0) {
                    roomNumbers += `O${i}${j} `

            } else {
                roomNumbers += `A${i}${j} `
            }


        }
        console.log(roomNumbers);
    }

}




building(["6", "4"])