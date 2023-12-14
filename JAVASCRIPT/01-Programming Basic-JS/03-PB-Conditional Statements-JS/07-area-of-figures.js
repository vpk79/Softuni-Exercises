function figure(input){
    let shape = input[0];
    let result = 0;

    if (shape === "square"){
        let side = Number(input[1]);
        result = side * side;
        console.log(result.toFixed(3));

    } else if (shape === "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
        console.log(result.toFixed(3));

    } else if (shape === "circle"){
        let radius = Number(input[1]);
        result = Math.PI * radius ** 2;
        console.log(result.toFixed(3));
        
    } else if (shape === "triangle"){
        let sideA = Number(input[1]);
        let sideH = Number(input[2]);
        result = sideA * sideH / 2;
        console.log(result.toFixed(3));
    }


}



figure(["triangle", "4.5", "20"])