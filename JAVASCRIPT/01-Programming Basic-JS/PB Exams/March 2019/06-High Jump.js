function highJumps(input) {
    let index = 0;
    let desiredHigh = Number(input[index]);
    index++;
    let jump = Number(input[index]);
    index++;

    let startHigh = desiredHigh - 30;
    let succeeded = false;

    let unsucceededCounter = 0;
    let jumpCounter = 1;

    while (succeeded !== true) {


        if (jump > startHigh) {

            if (startHigh >= desiredHigh && jump > desiredHigh) {
                succeeded = true;
                break;
            } 

            startHigh += 5;
            unsucceededCounter = 0;
            
        } else {
            unsucceededCounter++;

            if (unsucceededCounter === 3) {

                break;
            }

        }
        jumpCounter++;
        jump = Number(input[index]);
        index++;
    }

    if (succeeded) {
        console.log(`Tihomir succeeded, he jumped over ${startHigh}cm after ${jumpCounter} jumps.`);
    } else {
        console.log(`Tihomir failed at ${startHigh}cm after ${jumpCounter} jumps.`);

    }
}








highJumps(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"])


