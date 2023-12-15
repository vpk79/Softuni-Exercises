function solve(input) {
    let demonList = input.split(/[, ]+/g).map(x => x.trim());
    let namePattern = /([^0-9./+*-])/g
    let damagePattern = /([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g
    let multiplayer = /(\*|\/)/g
    let name, health, damage, multiSet;
    let demonsArray = [];

    for (let line of demonList) {
        name = "";
        health = 0;
        damage = 0;
        multiSet = [];
        if (namePattern.test(line)) {
            name = line.match(namePattern);
            
            health = name.reduce((a, x) => a + x.charCodeAt(0), 0);
           
        }

        if (damagePattern.test(line)) {
            damage = line.match(damagePattern).map(Number).reduce((a, x) => a + x, 0);
        }

        if (multiplayer.test(line)) {
            multiSet = line.match(multiplayer).join("");
            for (let el of multiSet) {
                el === '/' ? damage /= 2 : damage *= 2;
            }
        }
        demonsArray.push({['name']:line, ['health']:health, ['damage']:damage});
    }

    demonsArray.sort((a,b) => a.name.localeCompare(b.name))
    
    demonsArray.forEach(x => console.log(`${x.name} - ${x.health} health, ${x.damage.toFixed(2)} damage`));
}

solve('M3ph-0.5s-0.5t0.0**');
solve('M3ph1st0**, Azazel');
solve('Gos/ho');
