        let arr=[0,2,1,2,0];
        let N=5;
        let obj={};
        for(let i=0;i<N;i++){
            if(obj[arr[i]]===undefined){
                obj[arr[i]]=1;
            }else{
                obj[arr[i]]++;
            }
        }
       
       let a=+obj[0];
       let b=+obj[1];
       let c=+obj[2];

        let ans=""
        for(let j=0;j<a;j++){
            ans+=0+" ";
        }
        
        for(let k=0;k<b;k++){
            ans+=1+" ";
        }
        
        for(let l=0;l<c;l++){
            ans+=2+" ";
        }
        
        console.log(ans);