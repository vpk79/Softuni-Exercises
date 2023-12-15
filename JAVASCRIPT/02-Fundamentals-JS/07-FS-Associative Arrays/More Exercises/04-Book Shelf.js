function solve(input) {

    let shelves = {};

    for (let line of input) {
        if (line.includes('->')) addShelf(line);
        if (line.includes(":")) addBook(line);
    }

    let sortedShelves = Object.entries(shelves).sort((a, b) => {
        let valueA = a[1];
        let valueB = b[1];
        return Object.values(valueB).flat().length - Object.values(valueA).flat().length;
    });

    for (let [shelf, genre] of sortedShelves) {
        let length = Object.values(genre).flat().length;
        let type = Object.keys(genre)
        console.log(`${shelf} ${type}: ${length}`);

        let buffer = Object.values(genre).flat();

        for (let obj of buffer) {
            let key = Object.keys(obj)
            console.log(`--> ${key}: ${obj[key]}`);
        }
    }

    function addShelf(string) {
        let [id, genre] = string.split(" -> ");

        if (!shelves.hasOwnProperty(id)) {
            shelves[id] = { [genre]: [] };
        }
    }

    function addBook(string) {
        let [title, author, genre] = string.split(/: |, /)
        let checkGenre = Object.values(shelves).find(x => x.hasOwnProperty(genre));
        if (checkGenre) {
            checkGenre[genre].push({ [title]: author })
        }

    }

}









solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci - fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci - fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci - fi',
    'Name of Earth: Jo Bell, sci - fi',
    'Pilots of Stone: Brook Jay, history'
])





