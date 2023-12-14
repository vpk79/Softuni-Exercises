function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);
    let nightPrice = 0;
    let sportType = "";

    switch(season){
        case "Winter":
            switch(groupType){
                case "girls":
                    nightPrice = 9.60;
                    sportType = "Gymnastics";
                    break;
                
                case "boys":
                    nightPrice = 9.60;
                    sportType = "Judo";
                    break;

                case "mixed":
                    nightPrice = 10;
                    sportType = "Ski";
                    break;
            } 
            break;
        
        case "Spring":
            switch(groupType){
                case "girls":
                    nightPrice = 7.20;
                    sportType = "Athletics";
                    break;
                
                case "boys":
                    nightPrice = 7.20;
                    sportType = "Tennis";
                    break;

                case "mixed":
                    nightPrice = 9.50;
                    sportType = "Cycling";
                    break;
            } 
            break;

        case "Summer":
            switch(groupType){
                case "girls":
                    nightPrice = 15;
                    sportType = "Volleyball";
                    break;
                
                case "boys":
                    nightPrice = 15;
                    sportType = "Football";
                    break;

                case "mixed":
                    nightPrice = 20;
                    sportType = "Swimming";
                    break;
            } 
            break;    
            
    }

    let finalPrice = studentsCount * nightsCount * nightPrice;

    if (studentsCount >= 50){
        finalPrice *= 0.50;
    } else if (studentsCount >= 20 && studentsCount < 50){
        finalPrice *= 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20){
        finalPrice *= 0.95;
       }

    console.log(`${sportType} ${finalPrice.toFixed(2)} lv.`);
}



schoolCamp(["Spring", "mixed", "17", "14"])