function sortArrays(arr, string){
    return string === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
sortArrays([14, 7, 17, 6, 8], 'asc')
sortArrays([14, 7, 17, 6, 8], 'desc')