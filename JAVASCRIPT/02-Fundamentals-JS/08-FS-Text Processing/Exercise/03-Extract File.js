function solve(text){

    let startIndex = text.lastIndexOf("\\")
    let slashIndex = text.lastIndexOf(".")
    let fileName = text.slice(startIndex +1, slashIndex);
    let extension = text.slice(slashIndex+1)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}




solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')