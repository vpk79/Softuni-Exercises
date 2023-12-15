function solve(input){

    let key = Number(input.shift());
    let pattern = /@(?<name>[A-Za-z]+)[^\-@:\!>]*!(?<behavior>[G])!/

    for(let line of input){
        if(line === 'end') break;
        let newLine = "";

        for(let el of line){
            let char = String.fromCharCode(el.charCodeAt(0) - key);
            newLine += char;
        }

        // console.log(newLine);
        if(!pattern.test(newLine)) continue;

        let kids = newLine.match(pattern);
        

        if(kids.groups.behavior === 'G'){
            console.log(kids.groups.name);
        }
    }
}


solve(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%', '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf', ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%', 'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn', 'DReh}e=<4lhzj1%K%', 'end'])



// solve(['3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejnW$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end'])

// solve(['3','N}eideidmk$\'(mnyenmCNlpamnin$J$', 'ddddkkkkmvkvmCFrqqrunvevek$J$nmgievnge','ppqmkkkmnolmnnCEhq/vkievk$Q$','yyegiivoguCYdohqwlqh/kguimhk$J$','end'])