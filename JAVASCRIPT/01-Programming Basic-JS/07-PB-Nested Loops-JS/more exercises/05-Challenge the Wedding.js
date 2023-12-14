function wedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let couples = "";




    for (let i = 1; i <= men; i++) {
        if (tables == 0) {
            break;
        }
        for (let j = 1; j <= women; j++) {
            if (tables == 0) {
                break;
            }
            couples += (`(${i} <-> ${j}) `);
            tables--;
        }
    }
    console.log(couples);
}




wedding(["5", "8", "40"])