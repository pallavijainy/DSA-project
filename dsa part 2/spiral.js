let mat = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];


let count = 0;
let size = mat.length * mat.length;
let top = 0,bottom = mat.length-1,left = 0,right = mat[0].length-1,res = [];
while(count < size){
for(let i = left; i <= right; i++){
    res.push(mat[top][i])
}top++;
count++;
for(let i = top; i <= bottom; i++){
    res.push(mat[i][right])
}right--;
count++;
for(let i = right-1;i >= left; i--){
    res.push(mat[bottom][i])
}bottom--;
count++;
for(let i = bottom-1;i >= top; i--){
    res.push(mat[i][left])
}left++;
count++;
}
console.log(count);
console.log(res);


