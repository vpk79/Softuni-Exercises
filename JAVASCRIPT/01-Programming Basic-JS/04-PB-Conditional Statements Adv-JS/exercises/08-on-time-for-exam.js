function studentExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let entryHour = Number(input[2]);
    let entryMinute = Number(input[3]);



    let studentDelay = "";

    let totalExamMinutes = examHour * 60 + examMinute;
    let totalEntryMinutes = entryHour * 60 + entryMinute;

    let totalDelayMinutes = Math.abs(totalExamMinutes - totalEntryMinutes);
    let hoursDelay = Math.floor(totalDelayMinutes/ 60);
    let minutesDelay = totalDelayMinutes % 60;

    if (totalExamMinutes === totalEntryMinutes) {
        console.log("On time");
    } else if (totalExamMinutes < totalEntryMinutes) {
        console.log("Late");

        if(totalDelayMinutes < 60){
            console.log(`${totalDelayMinutes} minutes after the start`);
        } else {
            if (minutesDelay < 10){
                console.log(`${hoursDelay}:0${minutesDelay} hours after the start`);
            } else {
                console.log(`${hoursDelay}:${minutesDelay} hours after the start`);
            } 
        }
    } else {
        if( totalDelayMinutes <= 30){
            console.log("On time");
            console.log(`${totalDelayMinutes} minutes before the start`);
        } else {
            console.log("Early");
            if(totalDelayMinutes < 60){
                console.log(`${totalDelayMinutes} minutes before the start`);
            } else {
                if (minutesDelay < 10){
                    console.log(`${hoursDelay}:0${minutesDelay} hours before the start`);
                } else {
                    console.log(`${hoursDelay}:${minutesDelay} hours before the start`);
                } 
            }

        }
    }



}

studentExam(["10", "00", "10", "00"])