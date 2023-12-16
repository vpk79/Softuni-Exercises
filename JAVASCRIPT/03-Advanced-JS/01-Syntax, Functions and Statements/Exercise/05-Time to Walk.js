function solve(steps, footprints, speed){

    let distance = steps * footprints;
    let speedPerSeconds = speed / 3.6;
    let rest = Math.floor(distance / 500) * 60;

    let time = distance / speedPerSeconds + rest;

    let hour = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hour < 10 ? 0 : ""}${hour}:${minutes < 10 ? 0 : ""}${minutes}:${seconds}`);

}



solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)



