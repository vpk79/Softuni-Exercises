function rightPlace(text1, char, text2){
    let buffer = text1.replace("_", char);
    buffer === text2 ? console.log("Matched") : console.log("Not Matched");
}


rightPlace('Str_ng', 'I',
'Strong' )
rightPlace('Str_ng', 'i',
'String' )