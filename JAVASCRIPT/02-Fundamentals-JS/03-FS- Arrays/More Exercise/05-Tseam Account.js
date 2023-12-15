function tseamAccount(input){

    let index = 0;
    let allGames = input[index];
    index++;
    let allGamesAsArray = allGames.split(" ");
    command = input[index];
    index++;

    while(command !== "Play!"){
        let commandAsArray = command.split(" ");
        let instruction = commandAsArray[0];
        let game = commandAsArray[1];

        switch(instruction){
            case "Install":
                if(allGamesAsArray.includes(game)){
                    break;
                } else {
                    allGamesAsArray.push(game);
                }
                break;

            case "Uninstall":
                if(allGamesAsArray.includes(game)){
                    let idx = allGamesAsArray.indexOf(game);
                    allGamesAsArray.splice(idx, 1)
                } else {
                    break;
                }
                break;
            
            case "Update":
                if(allGamesAsArray.includes(game)){
                    let idx = allGamesAsArray.indexOf(game);
                    allGamesAsArray.splice(idx, 1)
                    allGamesAsArray.push(game);
                } else {
                    break;
                }
                break;

            case "Expansion":
                let arrayOfGame = game.split("-");
                let firstWordOfGame = arrayOfGame[0];
                let arrayOfExpansion = arrayOfGame.join(":")
                if(allGamesAsArray.includes(firstWordOfGame)){
                    let idx = allGamesAsArray.indexOf(firstWordOfGame);
                    allGamesAsArray.splice(idx+1, 0, arrayOfExpansion);
                } else {
                    break;
                }
                break;
        }



        command = input[index];
        index++;
    }

    console.log(allGamesAsArray.join(" "));
    
}




tseamAccount([
'CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)