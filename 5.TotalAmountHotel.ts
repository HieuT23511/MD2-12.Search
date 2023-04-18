function matrixElementsSum (matrix:number[][]){
    let total:number =0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length;j++) {
            if(matrix[i][j]==0 && i < matrix.length-1){
                matrix[i+1][j]=0
            }
            total += matrix[i][j];
        }
    }
    return total;
}
let matrix: number[][] = [
    [0, 1, 1, 2],
    [0, 5, 1, 0],
    [2, 0, 3, 3]
];
console.log(matrixElementsSum(matrix));