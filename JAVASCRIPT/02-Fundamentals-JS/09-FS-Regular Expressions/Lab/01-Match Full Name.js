function solve(input) {

    let names = input.split(", ")

    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/gm

    let validNames = [];

    let validName;

    while ((validName = pattern.exec(names)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(" "));
}



solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")