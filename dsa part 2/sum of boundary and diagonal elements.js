function sumOfBoundaryAndDiagonal(matrix){
    
    let n=matrix.length
    
    let sum=0;
    
        for(var i=0; i<matrix.length; i++)
        {
            for(var j=0; j<matrix.length; j++)
            {
                if(i == j || (i + j) == n-1)
                {
                    sum+=matrix[i][j]
                }
                else if(i==0 || j==0 || i==n-1 || j==n-1)
                {
                    sum+=matrix[i][j]
                }
            }
        }
        console.log(sum)
    }