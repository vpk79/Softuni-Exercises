function triangleArea(sideA, sideB, sideC){
    let s = 1/2*(sideA + sideB + sideC)
    let area = Math.sqrt(s*(s - sideA)*(s - sideB)*(s - sideC))

    console.log(area);
}



triangleArea(2,
    3.5,
    4
    )