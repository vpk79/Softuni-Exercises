function secretChat(input){
    let string = input.shift();

    for(let entry of input){
        if(entry === 'Reveal') break;
        if(entry.includes('ChangeAll')) string = change(entry);
        if(entry.includes('Reverse')) string = reverse(entry);
        if(entry.includes('InsertSpace')) string = insert(entry);

    }

    function change(entry){
        let[command, oldTxt, newTxt] = entry.split(':|:');
        const pattern = new RegExp(oldTxt, 'g');
        string = string.replace(pattern, newTxt);
        console.log(string);
        return string;
    }

    function reverse(entry){
        let[command, txt] = entry.split(':|:');
        if(!string.includes(txt)){
            console.log('error');
            return string;
        } else {
            string = string.replace(txt, '');
            txt = txt.split('').reverse().join('');
            string = string + txt;
        }
        console.log(string);
        return string;
    }

    function insert(entry){
        let[command, index] = entry.split(':|:');
        string = string.slice(0,index) + ' ' + string.slice(index)
        console.log(string);
        return string;
    }

    console.log(`You have a new text message: ${string}`);
}



// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]
// )

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
)