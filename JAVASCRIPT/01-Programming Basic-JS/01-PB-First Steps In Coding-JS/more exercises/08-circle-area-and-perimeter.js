function circle(input){
    let r = Number(input[0]);

    let s = Math.PI * r ** 2;
    let p = Math.PI * 2 * r;

    console.log(s.toFixed(2));
    console.log((p.toFixed(2)));

}



circle(["3"]);


