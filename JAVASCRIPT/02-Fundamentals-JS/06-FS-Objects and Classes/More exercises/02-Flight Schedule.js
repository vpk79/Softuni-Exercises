function flightShedule(data){

    let allFlights = [];

    let[flightlist, statusChange, flightStatus] = data;
    
    let status = 'Ready to fly';

    for(let line of flightlist){
       let flight = line.slice(0,6).trim()
       let destination = line.slice(6).trim()
        
        allFlights.push({flight: flight, destination: destination, status: status});
        
    }

    for(let line of statusChange){
        let [flight, status] = line.split(" ");

        for(let i = 0; i < allFlights.length; i++){
            let value = allFlights[i].flight;
            if(value == flight){
                allFlights[i].status = status;
                // console.table(allFlights)
            } 
        }
    }

    for(let i = 0; i < allFlights.length; i++){
        let value = allFlights[i].status;
        if(value == flightStatus){
            console.log(`{ Destination: '${allFlights[i].destination}', Status: '${allFlights[i].status}' }`);
        }
    }

}



// flightShedule([['WN269 Delaware',
//  'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
// 'WN612 Cancelled',
// 'WN1173 Cancelled',
// 'SK430 Cancelled'],
// ['Cancelled']])

flightShedule([[
'WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'],
['Ready to fly']])