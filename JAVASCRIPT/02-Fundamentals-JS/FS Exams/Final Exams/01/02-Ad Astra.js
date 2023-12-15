function adAstra(input) {

    let storage = [];
    const string = input[0];
    let energy = 0;
    const pattern = /(?<delimiter>[\|]|[#])(?<item>[A-Za-z\s]+)\k<delimiter>(?<expDate>[\d]{2}\/[\d]{2}\/[\d]{2})\k<delimiter>(?<calories>[\d]+)\k<delimiter>/g

    const allInfo = [...string.matchAll(pattern)]

    for (let line of allInfo) {
        const info = {
            item: line.groups.item,
            expiration: line.groups.expDate,
            calories: Number(line.groups.calories)
        }
        energy += Number(line.groups.calories);
        storage.push(info)
    }

    let totalEnergy = Math.trunc(energy / 2000);
    console.log(`You have food to last you for: ${totalEnergy} days!`);

    for (let token of storage) {
        console.log(`Item: ${token['item']}, Best before: ${token['expiration']}, Nutrition: ${token['calories']}`);
    }
}

// adAstra([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
// ]
// )

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])