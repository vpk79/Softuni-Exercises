function solve(speed, area){

    let limits = {
        motorway : 130,
        interstate : 90,
        city : 50,
        residential : 20,
    }

    if(speed <= limits[area]){
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    } else {
        let difference = Math.abs(limits[area] - speed);
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${status(difference)}`);
    }


    function status(overspeed){
        if(overspeed <= 20){
            return 'speeding'
        } else if (overspeed <= 40){
            return 'excessive speeding'
        } else {
            return 'reckless driving'
        }
    }

}



solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')