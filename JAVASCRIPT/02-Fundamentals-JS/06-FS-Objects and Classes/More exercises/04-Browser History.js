function solve(obj, arr) {
    let browserHistory = obj;

    let command = "";


    for (let line of arr) {
        if (line.includes('Clear')) {
            command = 'Clear'
        } else {
            [command, site] = line.split(" ");
        }

        switch (command) {
            case 'Open':
                browserHistory["Open Tabs"].push(site);
                browserHistory["Browser Logs"].push(line);
                break;

            case 'Close':
                while(browserHistory["Open Tabs"].indexOf(site) !== -1){
                    let index = browserHistory["Open Tabs"].indexOf(site);
                    browserHistory["Open Tabs"].splice(index, 1);
                    browserHistory["Recently Closed"].push(site);
                    browserHistory["Browser Logs"].push(line);
                }
                
                break;
            
            case 'Clear':
                browserHistory["Recently Closed"] = [];
                browserHistory["Browser Logs"] = [];
                browserHistory["Open Tabs"] = [];
                break;

        }
    }

    console.log(`${ browserHistory["Browser Name"] }`);
    console.log(`Open Tabs: ${ browserHistory["Open Tabs"].join(", ") }`);
    console.log(`Recently Closed: ${ browserHistory["Recently Closed"].join(", ") }`);
    console.log(`Browser Logs: ${ browserHistory["Browser Logs"].join(", ") }`);

}





solve({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate",
        "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])

// solve({
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail",
//         "Dropbox"],
//     "Browser Logs": ["Open Gmail",
//         "Close Gmail", "Open Dropbox",
//         "Open YouTube", "Close Dropbox"]},
//          ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])
