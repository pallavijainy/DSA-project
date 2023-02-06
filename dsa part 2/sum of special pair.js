function sumOfSpecialPairs(N,A){
   //write code here
   var sum = 0;
   for(var i=0;i<N-2;i++)
   {
       // j=i+2 as 1 is neither prime nor composite
       for(var j=i+2;j<N;j++)
       {
           var isPrime = true;
           var num = (j-i);
           // console.log("j-i ==",num);
           
           //Check prime
          for(var k=2;k<num;k++)
          {
              if(num%k==0){
                  isPrime = false;
              }
          }
       //   console.log("Isprime ==",isPrime)
          if(isPrime)
          {
              var diff = Math.abs(A[i]-A[j]);
           //   if(A[j]>A[i])
           //   {
           //       diff *= (-1);
           //   }
           //   console.log("diff ==",diff);
              sum += diff;
          }
       }
   }
   console.log(sum);

}
