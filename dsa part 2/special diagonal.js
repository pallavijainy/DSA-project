function specificDiagonals(R, C, matrix, K){
   var a,b;
   for(var i=0;i<R;i++){
       for(var j=0;j<C;j++){
           if(matrix[i][j]==K){
               a = i;
               b = j;
           }
       }
   }
   // console.log(a,b);
   var diff = a-b;
   var sum = a+b;
   var dia1 = "";
   var dia2 = "";
   for(var i=0;i<R;i++){
       for(var j=0;j<C;j++){
          if(i-j==diff){
              dia1 += matrix[i][j] + " "
          } 
          if(i+j==sum){
              dia2 += matrix[i][j]+" ";
          }
       }
   }
   console.log(dia1)
   console.log(dia2)
}
