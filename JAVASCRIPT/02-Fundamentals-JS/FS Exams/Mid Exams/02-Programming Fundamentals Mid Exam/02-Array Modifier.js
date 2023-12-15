function arrayModifier(input){
    let inputCopy = input.slice()
    let array = inputCopy.shift().split(" ").map(x => Number(x));


    for(const el of inputCopy){
        if(el === "end") break;

        let arrayOfEL = el.split(" ");
        let command = arrayOfEL[0];
        let index1 = Number(arrayOfEL[1]);
        let index2 = Number(arrayOfEL[2]);

        switch(command){
            case 'swap': 
                let element1 = array[index1];
                let element2 = array[index2];
                array[index1] = element2;
                array[index2] = element1;
                break;
                
            case 'multiply': 
                 let num1 = array[index1];
                 let num2 = array[index2];
                 array[index1] = num1 * num2;
                 break;

            case 'decrease':
                array = array.map(x => x - 1);
                break;
        }   
    }
    console.log(array.join(", "));

}





arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )


  arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )