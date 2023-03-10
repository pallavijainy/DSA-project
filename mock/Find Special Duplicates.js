function findSpecial(N, k, A) {
  // write code here
  let obj = {};
  for (let i = 0; i < N; i++) {
    let p = A[i];
    if (obj[p] != undefined) {
      if (Math.abs(i - obj[p]) <= k) {
        return console.log(obj[p], i);
      }
    } else {
      obj[p] = i;
    }
  }
  console.log(-1);
}
