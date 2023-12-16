class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(name, gender) {
        if (this.participants.hasOwnProperty(name)) {
            return `${name} has already been added to the list`
        } else {
            this.participants[name] = gender;
            return `A new participant has been added - ${name}`
        }
    }

    completeness(name, condition) {
        if (!this.participants.hasOwnProperty(name)) {
            throw new Error(`${name} is not in the current participants list`)
        }

        if (condition < 30) {
            throw new Error(`${name} is not well prepared and cannot finish any discipline`)
        }

        if ((condition / 30) < 3) {
            return `${name} could only complete ${Math.floor(condition / 30)} of the disciplines`;
        }

        this.listOfFinalists.push({ name: name, gender: this.participants[name] });
        delete this.participants[name];

        return `Congratulations, ${name} finished the whole competition`;
    }

    rewarding(name){
        if(!this.listOfFinalists.find(x => x.name === name)){
            return `${name} is not in the current finalists list`;
        }

        return `${name} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria){
        if(this.listOfFinalists.length === 0){
            return `There are no finalists in this competition`;
        }

        let participant = this.listOfFinalists.find(x => x.gender === criteria);
        if(participant){
            return `${participant.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }

        if(criteria === 'all'){
            let result = `List of all ${this.competitionName} finalists:`;
            this.listOfFinalists.sort((a,b) => a.name.localeCompare(b.name));
            for(let participant of this.listOfFinalists){
                result += '\n' + participant.name;
            }

            return result;
        }
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
