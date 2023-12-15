function towns(arr){
    let obj = {};

    for(let data of arr){
        let[town, latitude, longitude] = data.split(" | ").map(x => isNaN(x) ? x : Number(x).toFixed(2));
        obj.town = town;
        obj.latitude = latitude;
        obj.longitude = longitude;
        
        console.log(obj);
    }
}



towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])