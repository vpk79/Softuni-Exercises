function carNumber(input) {
    let numStart = Number(input[0]);
    let numEnd = Number(input[1]);
    let number = "";


    for (let i = numStart; i <= numEnd; i++) {
        for (j = numStart; j <= numEnd; j++) {
            for (k = numStart; k <= numEnd; k++) {
                if ((j + k) % 2 == 0) {
                    for (l = numStart; l <= numEnd; l++) {
                        if (i > l && i % 2 == 0 && l % 2 !== 0) {
                            number += `${i}${j}${k}${l} `;
                        } else if (i > l && i % 2 !== 0 && l % 2 == 0) {
                            number += `${i}${j}${k}${l} `;
                        } else {
                            continue;
                        }
                    }
                } else {
                    continue;
                }
            }
        }
    }
    console.log(number);
}



carNumber(["5", "8"])