function solve(areaFunc, volFunc, input) {
   const shape = JSON.parse(input);
    let area, volume;
    let allSums = [];

    shape.forEach(element => {
         area = areaFunc.call(element);
         volume = volFunc.call(element);
        allSums.push({
            area, volume
        })
    });

   return allSums;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};



solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)