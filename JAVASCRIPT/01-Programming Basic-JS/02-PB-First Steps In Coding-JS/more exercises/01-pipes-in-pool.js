function pool(input){
    let poolVolume = Number(input[0]);
    let pipeOneFlow = Number(input[1]);
    let pipeTwoFlow = Number(input[2]);
    let workerAbsence = Number(input[3]);

    let pipeOneFill = pipeOneFlow * workerAbsence;
    let pipeTwoFill = pipeTwoFlow * workerAbsence;
   
    let pipesFillness = pipeOneFill + pipeTwoFill;

    let pipeOnePercent = pipeOneFill / pipesFillness * 100;
    let pipeTwoPercent = pipeTwoFill / pipesFillness * 100;



    let poolFillPercent = 0;

    if (pipesFillness <= poolVolume){
        poolFillPercent = pipesFillness / poolVolume * 100;
        console.log(`The pool is ${poolFillPercent.toFixed(2)}% full. Pipe 1: ${pipeOnePercent.toFixed(2)}%. Pipe 2: ${pipeTwoPercent.toFixed(2)}%.`);
    } else {
        poolFillPercent = pipesFillness - poolVolume;
        console.log(`For ${workerAbsence.toFixed(2)} hours the pool overflows with ${poolFillPercent.toFixed(2)} liters.`);
    }

 

}



pool(["100", "100", "100", "2.5"])