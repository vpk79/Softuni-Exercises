class InventoryManager {

    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        if (this.items.length >= this.capacity) throw new Error("The inventory is already full.");

        let findItem = this.items.find(x => x.hasOwnProperty(itemName));

        if (findItem) {
            findItem[itemName] += quantity;
        } else {
            this.items.push({ [itemName]: quantity });
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        let findItem = this.items.find(x => x.hasOwnProperty(itemName));
        if (!findItem) throw new Error(`The item ${itemName} is not available in the inventory.`);
        if (findItem[itemName] < quantity) throw new Error(`Not enough ${itemName}(s) in stock.`);

        findItem[itemName] -= quantity;
        if (findItem[itemName] <= 0) {
            let index = this.items.indexOf(findItem);
            this.items.splice(index, 1);
            this.outOfStock.push(itemName);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        let findItem = this.items.find(x => x.hasOwnProperty(itemName));

        if (findItem) {
            findItem[itemName] += quantity;
        } else {
            this.items.push({ [itemName]: quantity });
        }

        let checkForItem = this.outOfStock.find(x => x === itemName);
        if (checkForItem) {
            let index = this.outOfStock.indexOf(checkForItem);
            this.outOfStock.splice(index, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let result = "Current Inventory:";
        let secondResult = 'Out of Stock: ';
        if (this.items.length > 0) {
            this.items.forEach(x => {
                let [key, value] = Object.entries(x)[0];
                result += '\n' + `${key}: ${value}`;
            });
        }

        if (this.outOfStock.length > 0) {
            this.outOfStock.forEach(itemName => {
                secondResult += `${itemName}, `;
            });

            return result + '\n' + secondResult.slice(0, -2);
        }
        return result;
    }
}   


// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Drill", 7));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());

