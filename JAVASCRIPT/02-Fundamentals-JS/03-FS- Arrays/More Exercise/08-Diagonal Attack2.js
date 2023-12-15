function diagonalAttack(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;
  
    for (let row = 0; row < matrix.length; row++) {
      mainDiagonalSum += matrix[row][row];
      antiDiagonalSum += matrix[row][matrix.length - row - 1];
    }
  
    if (mainDiagonalSum === antiDiagonalSum) {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
          if (row !== col && col !== matrix.length - row - 1) {
            matrix[row][col] = mainDiagonalSum;
          }
        }
      }
    }
  
    console.log(matrix.map(row => row.join(' ')).join('\n'));
  }


  diagonalAttack(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1'])