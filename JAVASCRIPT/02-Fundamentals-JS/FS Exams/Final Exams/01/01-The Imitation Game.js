function imitationGame(input){

let string = input.shift();

for (let line of input){
    if(line === 'Decode') break;

    if(line.includes('ChangeAll')) string = changeAll(line);
    if(line.includes('Insert')) string = insert(line);
    if(line.includes('Move')) string = move(line); 
    
}

    function changeAll(line) {
        let [command, letter1, letter2] = line.split("|");
        return string.split(letter1).join(letter2);
    }

    function insert(line) {
        let [command, index, letter] = line.split("|");
      string = [...string];
      string.splice(Number(index), 0, letter);
       
      return string.join('');
      
    }

    function move(line) {
        let [command, count] = line.split("|");
        count = Number(count);
        string = [...string];
         
        for (let i = 0; i < count; i++) {
            string.push(string.shift());
        }
        
        return string = string.join("");
    }

    console.log(`The decrypted message is: ${string}`);
   
}


// imitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode',
// ])


imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
  'Decode',
])