function cars(input) {

    let result = {};

    let creation = processor();

    for (let line of input) {
        if (line.includes('create') && !line.includes('inherit')) {
            let [command, name] = line.split(' ');
            creation[command](name);
        }

        if (line.includes('create') && line.includes('inherit')) {
            let [command1, name1, command2, name2] = line.split(' ');
            creation[command2](name1, name2);
        }

        if (line.includes('set')) {
            let [command, name, property, string] = line.split(' ');
            creation[command](name, property, string);
        }

        if (line.includes('print')) {
            let [command, objectName] = line.split(' ');
            creation[command](objectName);
        }
    }

    function processor() {

        function create(name) {
            result[name] = {};
        }

        function inherit(name1, name2) {
            result[name1] = Object.create(result[name2]);
        }

        function set(name, property, string) {

            result[name][property] = string;
        }

        function print(objectName) {
            let temp = [];
            for (key in result[objectName]) {
                temp.push(`${key}:${result[objectName][key]}`);
            }
            console.log(temp.join(','));
        }

        return {
            create,
            inherit,
            set,
            print
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)







// function cars(input) {

//     let result = {};

//     let creation = processor();

//     for (let line of input) {
//         if (line.includes('create') && !line.includes('inherit')) {
//             let [command, name] = line.split(' ');
//             creation[command](name);
//         }

//         if (line.includes('create') && line.includes('inherit')) {
//             let [command1, name1, command2, name2] = line.split(' ');
//             creation[command2](name1, name2);
//         }

//         if (line.includes('set')) {
//             let [command, name, property, string] = line.split(' ');
//             creation[command](name, property, string);
//         }

//         if (line.includes('print')) {
//             let [command, objectName] = line.split(' ');
//             creation[command](objectName);
//         }
//     }

//     function processor() {

//         function create(name) {
//             result[name] = {};

//         }

//         function inherit(name1, name2) {
//             result[name1] = Object.create(result[name2]);
//         }

//         function set(name, property, string) {
//             result[name][property] = string;
//         }

//         function print(objectName) {
//             for (key in result[objectName]) {

//                 console.log(`${key}:${result[objectName][key]}`);
//             }
//         }

//         return {
//             create,
//             inherit,
//             set,
//             print
//         }
//     }


// }