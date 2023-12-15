function arenaTier(input){

    let gladiators = new Map();

    for(let line of input){
        if(line === 'Ave Cesar') break;
        

        if(line.includes("->")){
            let[name, technique, skill] = line.split(" -> ");
            skill = Number(skill);

            if(!gladiators.get(name)){
                gladiators.set(name, new Map().set(technique, skill))
            } else {
                 if(!gladiators.get(name).has(technique)){
                    gladiators.get(name).set(technique, skill);
                 } else{
                    if(gladiators.get(name).get(technique) < skill){
                        gladiators.get(name).set(technique, skill);
                    }
                 }
            }
            
        } else{
            let[name1, name2] = line.split(" vs ");

            if(gladiators.has(name1) && gladiators.has(name2)){
                
                let gladiator1Skills = Array.from(gladiators.get(name1));
                let gladiator2SKills = Array.from(gladiators.get(name2));
                
                let biggerSkillArray = gladiator1Skills.length > gladiator2SKills.length ? gladiator1Skills : gladiator2SKills;
                let smallSkillArray = gladiator1Skills.length < gladiator2SKills.length ? gladiator1Skills : gladiator2SKills;

                for([skill, points] of biggerSkillArray){
                    if(smallSkillArray.flat().includes(skill)){
                        if (gladiators.get(name1).get(skill) > gladiators.get(name2).get(skill)){
                            gladiators.get(name2).delete(skill);
                        } else {
                            gladiators.get(name1).delete(skill);
                        }
                      
                    }
                }
            }
        }
    }

        let gladiatorTotalSkill = new Map();

        for(let [name, technique] of Array.from(gladiators)){
            let sum = 0;
            for(let [tech, skill] of Array.from(technique)){
                sum+= skill;
            }

            if(sum !== 0){
                gladiatorTotalSkill.set(name, sum);
            }

            
        }

        let sortedGladiatorList = Array.from(gladiatorTotalSkill).sort((a,b) => {
           return b[1] - a[1] || a[0].localeCompare(b[0])
        });

        for(let [name, points] of sortedGladiatorList){
            console.log(`${name}: ${points} skill`);
            let tech = Array.from(gladiators.get(name)).sort((a,b) => {
               return b[1] - a[1] || a[0].localeCompare(b[0])
            });

            for ([techName, skill] of tech){
                console.log(`- ${techName} <!> ${skill}`);
            }
        }
            
}





// arenaTier([
// 'Peter -> BattleCry -> 400',
// 'Alex -> PowerPunch -> 300',
// 'Stefan -> Duck -> 200',
// 'Stefan -> Tiger -> 250',
// 'Ave Cesar'
// ])

arenaTier([
'Peter -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Peter vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar'
])