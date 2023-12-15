function spiralMatrix(row, col){

    let matrix = []
    let number = 1;
    let rowStart = 0;
    let rowEnd = row - 1;
    let colStart = 0;
    let colEnd = col - 1;


    for(let i=0; i < row; i++){
        matrix.push([])
    }

    while(number <= row*col){

        for(let i = colStart; i <= colEnd; i++){
            matrix[rowStart][i] = number;
            number++;
        }
        rowStart++;

        for(let i = rowStart; i <= rowEnd; i++){
            matrix[i][colEnd] = number;
            number++;
        }
        colEnd--;

        for(let i = colEnd; i >= colStart; i--){
            matrix[rowEnd][i] = number;
            number++;
        }
        rowEnd--;

        for(let i = rowEnd; i >= rowStart; i--){
            matrix[i][colStart] = number;
            number++;
        }
        colStart++;
    }

    for (let i = 0; i < row; i++) {
        let row = '';
        for (let j = 0; j < col; j++) {
          row += matrix[i][j] + ' ';
        }
        console.log(row);
    }
}


spiralMatrix(5, 5);