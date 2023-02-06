function spiralTraversal(N, M, arr){
var i;
var row = 0, col = 0;
var str = "";
var count = 0;
var total = N * M;

while (true)
{
    if (count === total)
        break;

    for (i = row; i < N; i++)
    {
        str += arr[i][col] + " ";
        count++;
    }
    col++;

    if (count === total)
        break;

    for (i = col; i < M; i++)
    {
        str += arr[N - 1][i] + " ";
        count++;
    }
    N--;

    if (count === total)
        break;


    for (i = N - 1; i >= row; i--)
    {
        str +=arr[i][M - 1] + " ";
        count++;
    }
    M--;

    if (count === total)
        break;


    for (i = M - 1; i >= col; i--)
    {
        str += arr[row][i] + " ";
        count++;
    }
    row++;

}
console.log(str);
}

