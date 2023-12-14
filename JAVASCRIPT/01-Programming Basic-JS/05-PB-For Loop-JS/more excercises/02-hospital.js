function hospital(input) {
    let days = Number(input[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let nonTreatedPatients = 0;
    let daysCount = 1;

    for (let i = 1; i < days + 1; i++) {
        let patientCount = Number(input[i]);

        if (daysCount % 3 === 0) {
            if (nonTreatedPatients > treatedPatients) {
                doctors++;
            }
        }

        if (patientCount > doctors) {
            nonTreatedPatients += (patientCount - doctors);
            treatedPatients += doctors;
        } else {
            treatedPatients += patientCount;
        }

        daysCount++;


    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${nonTreatedPatients}.`);


}



// hospital(["3", "7", "7", "7"])
hospital(["4", "7", "27", "9", "1"])