function travelTime(input) {

    let destinations = new Map();

    for (let line of input) {
        let [country, city, price] = line.split(" > ");
        price = Number(price);

        if (!destinations.get(country)) {
            destinations.set(country, { [city]: price })
        } else if (!destinations.get(country).hasOwnProperty(city)) {
            destinations.get(country)[city] = price;
        } else {
            
            if (destinations.get(country)[city] > price) {
                destinations.get(country)[city] = price;
            }
        }

    }        
        let sortedList = new Map([...destinations].sort((a,b) => a[0].localeCompare(b[0])))
        let newSortedList = new Map(sortedList);
       
        for(let [key, value] of sortedList){
            let sortedValue = Object.fromEntries(Object.entries(value).sort((a,b) => a[1] - b[1]));

            newSortedList.set(key, sortedValue);
            
        }   

        for(let [key, value] of newSortedList){
            let unpackedValue = Object.entries(value)
            let stringedLine = "";

            for(let line of unpackedValue){
                stringedLine += " " + line.join(" -> ")    
            }
            console.log(`${key} ->${stringedLine}`);
        }
}



// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]
// )


// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
// ])

travelTime([
'Bulgaria > Sofia > 25000',
'aaa > Sofia > 1',
'aa > Orgrimar > 0',
'Albania > Tirana > 25000',
'zz > Aarna > 25010',
'Bulgaria > Lukovit > 10'])