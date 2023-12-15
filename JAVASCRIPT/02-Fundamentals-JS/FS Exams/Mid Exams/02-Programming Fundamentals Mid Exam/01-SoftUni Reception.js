function softUniReception(input){
    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let students = Number(input[3]);
    let counter = 1;

    while(students > 0){
        

        if(counter % 4 == 0){
            counter++;
            continue;
        }

        students -= employee1 + employee2 + employee3;
        counter++;
}

console.log(`Time needed: ${counter -1}h.`);

}

softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])