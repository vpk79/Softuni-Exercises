class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobsCandidates = [];
    }


    jobApplication(candidates) {

        for (let candidate of candidates) {
            let [name, education, experience] = candidate.split('-');
            experience = Number(experience);

            let findCandidate = this.jobsCandidates.find(x => x.name === name);
            if (findCandidate) {
                if (findCandidate.experience < experience) {
                    findCandidate.experience = experience;
                }
            } else {
                this.jobsCandidates.push({
                    name, education, experience
                })
            }
        }

        let result = [];
        for (let person of this.jobsCandidates) {
            result.push(person.name)
        }

        return `You successfully added candidates: ${result.join(', ')}.`

    }

    jobOffer(chosenPerson){
        let[name, minExperience] = chosenPerson.split('-');
        minExperience = Number(minExperience);
        let findCandidate = this.jobsCandidates.find(x => x.name === name);

        if (!findCandidate) throw new Error(`${name} is not in the candidates list!`)
        if(findCandidate.experience < minExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExperience} years.`)
        }
        findCandidate.experience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name){

        let findCandidate = this.jobsCandidates.find(x => x.name === name);
        if (!findCandidate) throw new Error(`${name} is not in the candidates list!`);

        if (findCandidate.education === 'Bachelor'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }

        if(findCandidate.education === 'Master'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`

    }

    candidatesDatabase(){
        if (this.jobsCandidates.length === 0) throw new Error("Candidate Database is empty!");

        let sortedCadidates = this.jobsCandidates.sort((a,b) => a.name.localeCompare(b.name));

        let result = "Candidates list:";

        for(let candidate of sortedCadidates){
            result += '\n' + `${candidate.name}-${candidate.experience}`
        }

        return result;
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());



