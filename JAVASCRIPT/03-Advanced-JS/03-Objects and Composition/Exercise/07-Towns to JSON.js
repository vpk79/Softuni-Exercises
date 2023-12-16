function solve(input){

    let cities =  [];

    input.shift();
    for(let token of input){
        let tokenArr = token.split("|");
        let town = tokenArr[1].trim();
        let latitude = Number(tokenArr[2]).toFixed(2);
        let longitude = Number(tokenArr[3]).toFixed(2);

        let city = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        cities.push(city)
    }

    cities = JSON.stringify(cities)

    console.log(cities);
}




solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])