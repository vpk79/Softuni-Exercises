function extract(content) {

    const text = document.getElementById(content).textContent;

    let pattern = /\((?<item>.*?)\)/g

    let result =  [];
    while((match = pattern.exec(text)) !== null){
        result.push(match.groups.item)
        
    }

  return result.join("; ")

}

extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).')