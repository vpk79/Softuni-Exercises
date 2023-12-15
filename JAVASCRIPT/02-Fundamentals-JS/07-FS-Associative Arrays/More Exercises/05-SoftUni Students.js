function solve(input) {

    let school = {};

    for (let line of input) {
        if (line.includes(':')) addCourse(line);
        if (line.includes('joins')) addStudent(line);
    }

    let sortedSchool = Object.fromEntries(Object.entries(school).sort((a, b) =>
      Object.keys(b[1].students).length - Object.keys(a[1].students).length
    ))

    Object.keys(sortedSchool).forEach(key => {
        sortedSchool[key].students.sort((a, b) => b.credits - a.credits);
    });

    for(let key of Object.keys(sortedSchool)){
        let places = sortedSchool[key].capacity;
        console.log(`${key}: ${places} places left `);

        for(let obj of Object.values(sortedSchool[key].students)){
            console.log(`--- ${obj.credits}: ${obj.userName}, ${obj.email}`);
        }
    }

    function addCourse(string) {
        let [course, capacity] = string.split(': ');
        capacity = Number(capacity);
        if (!school.hasOwnProperty(course)) {
            school[course] = {
                capacity: capacity,
                students: []
                 }
        } else {
            school[course].capacity += capacity;
        }
    }

    function addStudent(string) {
        let [user, credits, email, course] = string.split(/\[|\] with email | joins /g);
        credits = Number(credits);
        

        if (school.hasOwnProperty(course)) {

                let placesLeft = school[course].capacity
                if (placesLeft > 0) {
                    school[course].students.push({
                         userName: user,
                         credits : credits,
                         email: email
                         })
                    school[course].capacity --;
                }
        }
    }

    function checkStudent(user, course) {
        for (let key of school[course]) {
            if (key.hasOwnProperty(user)) {
                return true
            }
        }
        return false
    }
}




solve([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
])