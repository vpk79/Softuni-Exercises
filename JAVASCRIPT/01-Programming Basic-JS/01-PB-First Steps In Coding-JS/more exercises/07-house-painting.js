function housePainting(input){
    let houseHeight = Number(input[0]);
    let houseSide = Number(input[1]);
    let roofHeight = Number(input[2]);

    let frontHouseSides = 2 * (houseHeight * houseHeight) - (1.2 * 2);
    let sideHouseSides = 2 * (houseHeight * houseSide) - 2 * (1.5 * 1.5) ;

    let greenPaint = (frontHouseSides + sideHouseSides) / 3.4;

    let roofTop = 2 * (houseSide * houseHeight);
    let roofSides = 2 * (houseHeight * roofHeight /2);

    let redPaint = (roofTop + roofSides) / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));


}




housePainting(["6","10", "5.2"])