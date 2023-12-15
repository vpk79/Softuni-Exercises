function solve(input) {
    const maxCapacity = Number(input.shift());
    let users = [];

    for (let token of input) {
        if (token === 'Statistics') break;
        if (token.includes('Add')) add(token);
        if (token.includes('Message')) message(token);
        if (token.includes('Empty')) empty(token);
    }

    function add(token) {
        let [command, user, sent, received] = token.split('=');
        for (let obj of users) {
            if (obj.user === user) return;
        }
        users.push({
            user,
            sent: Number(sent),
            received: Number(received)
        })
    }

    function message(token) {
        let [command, user1, user2] = token.split('=');
        let findUser1 = users.find(x => x.user === user1);
        let findUser2 = users.find(x => x.user === user2);
        if (findUser1 && findUser2) {
            findUser1.sent++;
            findUser2.received++
        } else {
            return;
        }
        if (findUser1.sent + findUser1.received >= maxCapacity) {
            console.log(`${findUser1.user} reached the capacity!`);
            let index = users.indexOf(findUser1);
            users.splice(index, 1);
        }
        if (findUser2.received + findUser2.sent >= maxCapacity) {
            console.log(`${findUser2.user} reached the capacity!`);
            let index = users.indexOf(findUser2);
            users.splice(index, 1);
        }
    }

    function empty(token) {
        let [command, user] = token.split('=');
        if (user === 'All') {
            users = [];
            return;
        }
        let findUser = users.find(x => x.user === user);
        if (findUser) {
            let index = users.indexOf(findUser)
            users.splice(index, 1);
        }
    }

    console.log(`Users count: ${users.length}`);
    for (let user of users) {
        console.log(`${user.user} - ${user.sent + user.received}`);
    }

}

// solve(["10",
//     "Add=Berg=9=0",
//     "Add=Kevin=0=0",
//     "Message=Berg=Kevin",
//     "Add=Mark=5=4",
//     "Statistics"])

// solve(["20",
//     "Add=Mark=3=9",
//     "Add=Berry=5=5",
//     "Add=Clark=4=0",
//     "Empty=Berry",
//     "Add=Blake=9=3",
//     "Add=Michael=3=9",
//     "Add=Amy=9=9",
//     "Message=Blake=Amy",
//     "Message=Michael=Amy",
//     "Statistics"])

solve(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"])


