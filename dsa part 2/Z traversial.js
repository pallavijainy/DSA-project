function zTraversal(N,arr){
    //write code here
    var bag ="";
    for(var i =0;i<N;i++){
        bag= bag+arr[0][i]+" "
    }
    for(var i =1;i<N;i++){
        for(var j =0;j<N;j++){
        if(i+j==N-1){
            bag =bag+arr[i][j]+" ";
        }
        }
    }
    for(var i =1;i<N;i++){
        bag =bag+arr[N-1][i]+" "
    }
    console.log(bag)
  
}