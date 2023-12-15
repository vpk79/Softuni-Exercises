function loadingBar(num){
    let percent = num / 10;
    let buffer = "";
    for(let i = 0; i < percent; i++){
        buffer += "%"
    }

    let dots = 10 - percent;

    for(let i = 0; i < dots; i++){
        buffer += "."
    }

    if(num < 100){
        console.log(`${num}% [${buffer}]`);
        console.log('Still loading...');
    } else{
        console.log('100% Complete!');
        console.log(`[${buffer}]`);
    }

}

loadingBar(30)