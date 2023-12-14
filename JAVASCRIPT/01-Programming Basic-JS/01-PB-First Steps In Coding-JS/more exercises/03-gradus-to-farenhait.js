function converter(input){
    let gradus = Number(input[0]);

    let convertedGradus = (gradus * 9/5) + 32;
    console.log(convertedGradus.toFixed(2));
}




converter(["25"]);