function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let diag1 = 0;
    let diag2 = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            // get an element from the main diagonal
            if(i === j) { 
                diag1 += arr[i][j];
            }
            // an element from the counterdiagonal sum of diag = n.length - 1
            if(i + j === n - 1){
                diag2 += arr[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}