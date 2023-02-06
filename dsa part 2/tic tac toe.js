function ticTacToe(matrix){
   var result = false
   var player = null;
   //For row
   for(var i=0;i<3;i++){
       var eler = null;
       var countr = 0;
       for(var j=0;j<3;j++){
           if(eler==null || matrix[i][j]==eler){
               eler = matrix[i][j]
               countr ++;
           }
       }
       if(countr == 3){
           result = true;
           player = eler;
       }
   }

   


   // For col
   for(var i=0;i<3;i++){
       var elec = null;
       var countc = 0;
       for(var j=0;j<3;j++){
           if(elec==null || matrix[j][i]==elec){
               elec = matrix[j][i]
               countc ++;
           }
       }
       if(countc == 3){
           result = true;
           player = elec;
       }
   }
   
   //For dia
   var count1 = 0;
   var count2 = 0;
   var d1 = null;
   var d2 = null;
   for(var i=0;i<3;i++){
       for(var j=0;j<3;j++){
           if(i==j){
               if(d1 == null || matrix[i][j]==d1){
                   d1 = matrix[i][j]
                   count1++
               }
           }
           if(i+j==2){
               if(d2 == null || matrix[i][j]==d2){
                   d2 = matrix[i][j]
                   count2++
               }
           }
       }
   }
   
   if(count1 == 3){
       player = d1
       result = true
   }
   if(count2 == 3){
       player = d2 
       result = true
   }
   //Result console
   if(result){
       console.log(player)
   }
   else{
       console.log("Tie")
   }
 
}
