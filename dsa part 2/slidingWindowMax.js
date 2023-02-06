let nums = [1,3,-1,-3,5,3,6,7], k = 3;
let res = []
for(let i = 0;i<= nums.length-k;i++){
    let max = 0;
    for(let j = i;j< i+k;j++){
       max = Math.max(max,nums[j])   
    }
    res.push(max)
}
console.log(res);