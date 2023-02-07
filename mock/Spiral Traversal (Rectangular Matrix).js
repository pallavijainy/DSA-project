function spiralTraversal(N, M, arr) {
  let count = 0,
    left = 0,
    right = arr[0].length - 1,
    top = 0,
    bottom = arr.length - 1,
    res = "";
  let total = N * M;
  while (count < total) {
    for (let i = top; (i <= bottom) & (count < total); i++)
      (res += arr[i][left] + " "), count++;
    left++;
    for (let i = left; (i <= right) & (count < total); i++)
      (res += arr[bottom][i] + " "), count++;
    bottom--;
    for (let i = bottom; (i >= top) & (count < total); i--)
      (res += arr[i][right] + " "), count++;
    right--;
    for (let i = right; (i >= left) & (count < total); i--)
      (res += arr[top][i] + " "), count++;
    top++;
  }
  console.log(res);
}
