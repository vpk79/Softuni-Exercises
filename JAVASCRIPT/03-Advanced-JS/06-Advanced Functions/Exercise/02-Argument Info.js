function argumentInfo(...args){
    let counters = {};
    args.forEach(x => {
        let type = typeof(x);
        console.log(`${type}: ${x}`);
        if(!counters.hasOwnProperty(type)){
            counters[type] = 1;
        } else {
            counters[type] += 1;
        }
    })

    let sortedArr = Object.entries(counters).sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} = ${x[1]}`));
    
}




argumentInfo({ name: 'bob' }, 3.333, 9.999)




// argumentInfo('cat', 42, function () { console.log('Hello world!'); });