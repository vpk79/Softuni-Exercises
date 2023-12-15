function solve(input){

    let armies = new Map();

    for(let line of input){
        if(line.includes('arrives')) leaderArrive(line);
        if(line.includes(":")) addLeaderAndArmy(line);
        if(line.includes("+")) addArmy(line);
        if(line.includes("defeated")) leaderDefeat(line);
    }

    let leaders = new Map();
    

    for(let [leader, armyMap] of armies){
        let sum = 0;
        for(let [armyName, armyCount] of armyMap){
            sum += armyCount;
        }
        leaders.set(leader, sum);
        sortedArmy = new Map([...armyMap].sort((a, b) => b[1] - a[1]));
        armies.set(leader, sortedArmy)
    }

    let sortedLeaders = new Map([...leaders].sort((a,b) => b[1] - a[1]));

    for(let [leader, armySum] of sortedLeaders){
        console.log(`${leader}: ${armySum}`);
            for (let [armyName, armyCount] of armies.get(leader)) {
                console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }

    function leaderArrive(string){
        let [name] = string.split(" arrives");
        if(!armies.has(name)){
            armies.set(name, new Map())
        }
    }

    function addLeaderAndArmy(string){
        let [name, armyName, armyCount] = string.split(/[:,]/).map(x => isNaN(x) ? x.trim() : Number(x.trim()));
        if(!armies.has(name)){
            return;
        } else if (!armies.get(name).has(armyName)){
            armies.get(name).set(armyName, armyCount);
        }else {
            armies.get(name).set(armyName, armies.get(name).get(armyName) + armyCount);
        }
    }
    
    function addArmy(string){
        let [armyName, armyCount] = string.split(" + ").map(x => isNaN(x) ? x : Number(x));

        for(let [key, value] of armies){
            if(value.has(armyName)){
                armies.get(key).set(armyName, armies.get(key).get(armyName) + armyCount);
            }
        }
    }

    function leaderDefeat(string){
        let [name] = string.split(" defeated");

        if(armies.has(name)){
            armies.delete(name);
        }
    }
}




// solve([
// 'Rick Burr arrives',
// 'Fergus: Wexamp, 30245',
// 'Rick Burr: Juard, 50000',
// 'Findlay arrives',
// 'Findlay: Britox, 34540',
// 'Wexamp + 6000',
// 'Juard + 1350',
// 'Britox + 4500',
// 'Porter arrives',
// 'Porter: Legion, 55000',
// 'Legion + 302',
// 'Rick Burr defeated',
// 'Porter: Retix, 3205'])

solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500',
'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])