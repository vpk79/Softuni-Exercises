function companyUsers(input) {
    let companies = new Map();

    for (let line of input) {
        let [company, user] = line.split(" -> ");
        if (!companies.has(company)) {
            companies.set(company, [user]);
        } else if (companies.get(company).includes(user)) {
            continue;
        } else {
            companies.get(company).push(user);
        }
    }
    
    let sortedCompanies = new Map([...companies].sort())

    for (let [key, value] of sortedCompanies) {
        console.log(`${key}\n-- ${value.join("\n-- ")}`);
    }
}




// companyUsers([
// 'SoftUni -> AA12345',
// 'SoftUni -> BB12345',
// 'Microsoft -> CC12345',
// 'HP -> BB12345'])

companyUsers([ 'SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111'
]
)