function destinations(input){
    const pattern = /([=]|[\/])(?<location>[A-Z][A-Za-z]{2,})\1/g
    let storage = [];
    let matches = [...input.matchAll(pattern)];
    matches.forEach(x => storage.push(x.groups.location))
    let travelPts = storage.reduce((a, x) => a + x.length, 0);
    console.log(`Destinations: ${storage.join(', ')}`);
    console.log(`Travel Points: ${travelPts}`);
}

destinations("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinations(("ThisIs some InvalidInput"))