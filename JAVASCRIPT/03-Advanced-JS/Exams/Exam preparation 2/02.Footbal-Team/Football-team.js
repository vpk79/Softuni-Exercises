class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let findPlayer = this.invitedPlayers.find(x => x.name === name);
            if (findPlayer && findPlayer.playerValue < playerValue) {
                findPlayer[playerValue] = playerValue;
            }

            if (!findPlayer) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                })
            }
        }

        let result = "You successfully invite ";
        let players = []
        for (let player of this.invitedPlayers) {
            players.push(player.name);
        }

        return result + players.join(', ') + '.'
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let findPlayer = this.invitedPlayers.find(x => x.name === name);
        if (!findPlayer) throw new Error(`${name} is not invited to the selection list!`)

        if (findPlayer.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${findPlayer.playerValue - playerOffer} million more are needed to sign the contract!`)
        }

        findPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {

        let findPlayer = this.invitedPlayers.find(x => x.name === name);
        if (!findPlayer) throw new Error(`${name} is not invited to the selection list!`)

        if (findPlayer.age < age) {
            let ageDiff = age - findPlayer.age;
            if (ageDiff < 5) {
                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`
            } else if (ageDiff > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else{
            return `${name} is above age limit!`
        }
    }

    transferWindowResult(){
        let result = "Players list:"
        let sortedPlayers = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));

        for(let player of sortedPlayers){
            result += '\n' + `Player ${player.name}-${player.playerValue}`
        }

        return result;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


