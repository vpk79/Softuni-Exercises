function radioCrystals(input) {
    let index = 0;
    let targetThickness = input[index];
    index++;

    let washing;

    while (index < input.length) {

        var cutCounter = 0;
        var lapCounter = 0;
        var grindCounter = 0;
        var etchCounter = 0;
        var xRayCounter = 0;

        let chunk = input[index];
        console.log(`Processing chunk ${chunk} microns`);

        while (chunk !== targetThickness) {
            let cutted = chunkCut(chunk);
            cutCounter > 0 ? washing = transportingAndWashing(cutted) : washing = cutted;
            if (checkChunk(washing)) { console.log(`Finished crystal ${cutted} microns`); break; }
            let lapping = lap(washing);
            lapCounter > 0 ? washing = transportingAndWashing(lapping) : washing = lapping;
            if (checkChunk(washing)) { console.log(`Finished crystal ${lapping} microns`); break; }
            let grinding = grind(washing);
            grindCounter > 0 ? washing = transportingAndWashing(grinding) : washing = grinding;
            if (checkChunk(washing)) { console.log(`Finished crystal ${grinding} microns`); break; }
            let etching = etch(washing);
            etchCounter > 0 ? washing = transportingAndWashing(etching) : washing = etching;
            if (checkChunk(washing)) { console.log(`Finished crystal ${etching} microns`); break; }
            let xRaing = xRay(washing);
            if (checkChunk(xRaing)) { console.log(`Finished crystal ${xRaing} microns`); break; }

        }
        index++;
    }


    function checkChunk(chunk) {
        if (chunk == targetThickness) {
            return true
        } else {
            return false;
        }
    }

    function xRay(chunk) {
        if (chunk + 1 == targetThickness) {
            chunk += 1;
            xRayCounter++;
            return xRay(chunk);
        } else {
            xRayCounter > 0 ? console.log(`X-ray x${xRayCounter}`) : void (0)

            return chunk;
        }
    }


    function etch(chunk) {
        if (chunk - 2 >= targetThickness - 1) {
            chunk -= 2;
            etchCounter++;
            return etch(chunk);
        } else {
            etchCounter > 0 ? console.log(`Etch x${etchCounter}`) : void (0)

            return chunk;
        }
    }


    function grind(chunk) {
        if (chunk - 20 >= targetThickness - 1) {
            chunk -= 20;
            grindCounter++;
            return grind(chunk);
        } else {
            grindCounter > 0 ? console.log(`Grind x${grindCounter}`) : void (0);

            return chunk;
        }
    }

    function lap(chunk) {
        if (chunk * 0.80 >= targetThickness - 1) {
            chunk *= 0.80;
            lapCounter++;
            return lap(chunk);
        } else {
            lapCounter > 0 ? console.log(`Lap x${lapCounter}`) : void (0);

            return chunk;
        }
    }


    function chunkCut(chunk) {
        if (chunk / 4 >= targetThickness - 1) {
            chunk /= 4;
            cutCounter++;
            return chunkCut(chunk)

        } else {
            cutCounter > 0 ? console.log(`Cut x${cutCounter}`) : void (0)

            return chunk;
        }

    }


    function transportingAndWashing(chunk) {
        console.log('Transporting and washing');
        return Math.floor(chunk);
    }
}




// radioCrystals([1375, 50000])
// radioCrystals([1000, 4000, 8100])
radioCrystals([15, 55])