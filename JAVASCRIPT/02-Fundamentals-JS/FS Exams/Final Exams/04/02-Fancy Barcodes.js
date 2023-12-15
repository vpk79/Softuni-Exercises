function solve(input){

    let pattern = /@#{1,}(?<word>[A-Z][A-Z|a-z|0-9]{4,}[A-Z])@#{1,}/

    let digits = /\d+/g

    let barcodeCount = Number(input.shift());

    for(let i = 0; i < barcodeCount; i++){
        let line = input[i];
        if(!pattern.test(line)){
            console.log("Invalid barcode");
            continue;
        } 
        let barcode = line.match(pattern).groups.word;

        if(!digits.test(barcode)){
            console.log(`Product group: 00`);
        } else {
            let productCode = barcode.match(digits).join("");
            console.log(`Product group: ${productCode}`);
        }
    }
}




// solve(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])



solve(["6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"])

