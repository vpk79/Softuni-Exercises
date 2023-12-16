function createSortedList() {

    let obj = {
        sortedList: [],
        add(element) {
            this.sortedList.push(element);
            this.sortedList.sort((a,b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.sortedList.length) {
                this.sortedList.splice(index, 1);
            }

        },
        get(index) {
            if (index >= 0 && index < this.sortedList.length) {
                return this.sortedList[index];
            }

        },
        get size() {
            return this.sortedList.length;
        }

    }

    return obj;
}




let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

// var myList = result();
// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// // Generate random list of 20 numbers
// var expectedArray = [];
// for (let i = 0; i < 20; i++) {
//     expectedArray.push(Math.floor(Math.random() * 200) - 100);
// }
// // Add to collection
// for (let i = 0; i < expectedArray.length; i++) {
//     myList.add(expectedArray[i]);
// }
// expect(myList.size).to.equal(20, "Elements weren't added");
// // Sort array
// expectedArray.sort((a, b) => a - b);
// // Compare with collection
// for (let i = 0; i < expectedArray.length; i++) {
//     expect(myList.get(i)).to.equal(expectedArray[i], "Array wasn't sorted");
// }