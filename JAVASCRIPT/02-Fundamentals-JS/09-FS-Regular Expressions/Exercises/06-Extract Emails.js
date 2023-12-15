function solve(input){
    let pattern = /\s\b[^-._][\w.-]+[\w.-]+[^-._\s][@]\b[^\W.-][\w]+[-|\.]+[\w\.]+[^\W.-]\b/g

    let emails;

    if(pattern.test(input)){
        emails = input.match(pattern)
    }
    emails.forEach(x => console.log(x.trim()));
}

solve(`Please contact us at: support@github.com.`)
solve(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`)
solve(`Many users @SoftUni confuse email addresses.We @ Softuni.BG provide high - quality training @ home or @ class.-- steve.parker@softuni.de.`)







// valid names:
// stephan
// mike03
// s.johnson
// st_steward
// softuni-bulgaria
// 12345

// invalid names
// --123
// .....
// nakov_-
// _steve
// .info


// valid hosts:
// softuni.bg
// software-university.com
// intoprogramming.info
// mail.softuni.org

// invalid hosts:
// helloworld
// .unknown.soft.
// invalid-host-
// invalid-

// invalid mails
// --123@mail.softuni.org
// nakov_ - @mail.softuni.org
// _steve @mail.softuni.org
// .info @mail.softuni.org
