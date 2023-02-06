let num = 16;
function findit(num){
    let low = 0,high = num;
    while(low <= high){
        let mid = Math.floor(low + (high - low) / 2)
        if(mid * mid == num)return true;
        if(mid *mid > num){
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return false;
}

console.log(findit(45));