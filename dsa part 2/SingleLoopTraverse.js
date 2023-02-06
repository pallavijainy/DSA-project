let mat = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
]

let row = mat.length
let col = mat[0].length;
let x = row * col;
let j = 0;
for(let i = 0;i < col;i++){
    if(i % col == 0)j++;
    console.log(mat[j][i])
}