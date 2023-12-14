function footballLeague(input){
    let stadiumCapacity = Number(input[0]);
    let fenCount = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for(let i = 2; i < fenCount + 2; i++){
        let sector = input[i];

        if(sector === "A"){
            sectorA++;
        } else if(sector === "B"){
            sectorB++;
        } else if( sector === "V"){
            sectorV++;
        } else {
            sectorG++;
        }

    }

    let sectorAPercent = sectorA / fenCount * 100;
    let sectorBPercent = sectorB / fenCount * 100;
    let sectorVPercent = sectorV / fenCount * 100;
    let sectorGPercent = sectorG / fenCount * 100;
    let allFenPercent = fenCount / stadiumCapacity * 100;

    console.log(sectorAPercent.toFixed(2) + "%");
    console.log(sectorBPercent.toFixed(2) + "%");
    console.log(sectorVPercent.toFixed(2) + "%");
    console.log(sectorGPercent.toFixed(2) + "%");
    console.log(allFenPercent.toFixed(2) + "%");


}









footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"])