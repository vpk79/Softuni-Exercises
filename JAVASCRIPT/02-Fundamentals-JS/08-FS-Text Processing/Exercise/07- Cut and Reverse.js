function solve(text){

    let textArr = text.split("").reverse();
    let firstLine = textArr.slice(0, textArr.length / 2);
    let secondLine = textArr.slice((textArr.length / 2))
    
    
    console.log(secondLine.join(""));
    console.log(firstLine.join(""));
}


solve('tluciffiDsIsihTgnizamAoSsIsihT')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')