function truckDriver(input){
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let salaryPerKm = 0;

    switch(season){
        case "Spring":
        case "Autumn":
            if(kmPerMonth <= 5000){
                salaryPerKm = 0.75;

            } else if (kmPerMonth <= 10000){
                salaryPerKm = 0.95;

            } else{
                salaryPerKm = 1.45;
            }
        break;

        case "Summer":
            if(kmPerMonth <= 5000){
                salaryPerKm = 0.90;

            } else if (kmPerMonth <= 10000){
                salaryPerKm = 1.10;

            } else{
                salaryPerKm = 1.45;
            }
        break;

        case "Winter":
            if(kmPerMonth <= 5000){
                salaryPerKm = 1.05;

            } else if (kmPerMonth <= 10000){
                salaryPerKm = 1.25;

            } else{
                salaryPerKm = 1.45;
            }
        break;
    }

    let salary = (kmPerMonth * salaryPerKm) * 4;
    salary *= 0.90;

    console.log(salary.toFixed(2));
}




truckDriver(["Winter", "4350"])