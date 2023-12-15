function chessBoard(num){
    console.log('<div class="chessboard">');
    let color = "black"
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0){
            color = "white";
        } else {
            color = "black";
        }
        console.log("  <div>");
        for(let j = 0; j < num; j++){
            
            if(color === "black"){
            console.log(`    <span class="${color}"></span>`);
            color = "white";
            } else {
                console.log(`    <span class="${color}"></span>`);
                color = "black";
            }
        }
        console.log("  </div>");
    }
    console.log("</div>");

}



chessBoard(6)