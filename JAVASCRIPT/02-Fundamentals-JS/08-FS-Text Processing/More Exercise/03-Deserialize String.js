function solve(input){
    let stringArr = input.shift().split(/[:/]/);
    
    let bufferArr = [];

    while (stringArr[0] !== 'end'){
        let char = stringArr.shift();

        for(let el of stringArr){
            if(!isNaN(el)){
                bufferArr[el] = char;
            }
        }
        stringArr = input.shift().split(/[:/]/);
    }

    console.log(bufferArr.join(""));
}



solve([
    'a:0/2/4/6',
    'b:1/3/5',
    'end'])

solve(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])