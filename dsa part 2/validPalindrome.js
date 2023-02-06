let s = "race a car"
let res = ''
let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
for(let i = 0;i< s.length;i++){
    for(let j = 0;j< abc.length;j++){
        if(s[i] == abc[j]){
            res += s[i]
            break
        }
    }
}
let x = res.toLowerCase()
if(x ,x.split('').reverse().join(''))console.log('yes');
else console.log('no');