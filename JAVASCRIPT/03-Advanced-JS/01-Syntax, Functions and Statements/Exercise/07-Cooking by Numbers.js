function solve(...params){

    let num = Number(params.shift());

    let operations = {

        chop : (a) => a / 2,
        dice : (a) => Math.sqrt(a),
        spice : (a) => a += 1,
        bake : (a) => a * 3,
        fillet : (a) => a - ((a * 20) / 100),
    }

    let result = params.reduce((a, x) => {
        a = operations[x](a);
        console.log(a);
        return a;
    }, num)
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')