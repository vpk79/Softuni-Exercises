function distinctArray(input){
    return arr = input.filter((item, index, array) => array.indexOf(item) === index).join(" ");
}


// unique_array = my_array.filter((item, index, array) => array.indexOf(item) === index);

console.log(distinctArray([1, 2, 3, 4]))
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));