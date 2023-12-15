function solve(arr) {

    let textArr = arr[0].split(" ");
    let words = arr[1];

    for (let el of words) {                                     // cycling words array
        let elLength = el.length;

        for (let i = 0; i < textArr.length; i++) {
            let txt = textArr[i];
            let txtLength;
            if (txt.startsWith("_")) {                          // finding exact match by symbol
                txtLength = txt.length;         
                if (!txt.endsWith("_")) {                        // we cut the ending of the word if not end with "_"
                    txtLength--;
                }

                if (txtLength == elLength) {                     // matching the length of two words
                    let replaceSymbol = "_".repeat(txtLength);   // making replace pattern
                    txt = txt.replace(replaceSymbol, el);        // replacing the text word with new word
                    textArr[i] = txt;                            // replacing the word in words array
                }
            }
        }
    }

    console.log(textArr.join(" "));
}


solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])