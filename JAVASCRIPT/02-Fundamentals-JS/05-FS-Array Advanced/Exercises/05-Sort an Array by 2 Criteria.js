function sortArrayBy2Criteria(input){
    // let arraySorted = input.sort().sort((a, b) =>  a.length - b.length)

    let arraySorted = input.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b)
    })
    return arraySorted.join("\n")
}







// console.log(sortArrayBy2Criteria(['alpha','beta','gamma']))
// console.log(sortArrayBy2Criteria(['Isacc','Theodor','Jack','Harrison','George']));
console.log(sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']));