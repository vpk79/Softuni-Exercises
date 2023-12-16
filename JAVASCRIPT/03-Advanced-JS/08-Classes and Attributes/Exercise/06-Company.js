class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(!name || !salary || !position || !department || salary < 0){
            throw new Error("Invalid input!");
        }

        if(!this.departments.hasOwnProperty(department)){
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});
       return(`New employee is hired. Name: ${name}. Position: ${position}`);
    }

    bestDepartment(){
        let bestDpt = {};
        for(let dpt in this.departments){
            let avgSalary = this.departments[dpt].reduce((a, x) => (a + x.salary), 0);
            avgSalary = avgSalary / this.departments[dpt].length;
            bestDpt[dpt] = avgSalary; 
        }

        let bestDptAvgSalary = Object.entries(bestDpt).sort((a,b) => b[1] - a[1]);

        let result = '';
        result += `Best Department is: ${bestDptAvgSalary[0][0]}\n`;
        result += `Average salary: ${bestDptAvgSalary[0][1].toFixed(2)}`;
        this.departments[bestDptAvgSalary[0][0]].sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name));
        for(let employee of this.departments[bestDptAvgSalary[0][0]]){
          result += `\n${employee.name} ${employee.salary} ${employee.position}`
        }
        return result;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
