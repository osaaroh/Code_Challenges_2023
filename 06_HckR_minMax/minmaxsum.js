function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;
    let minArray = [...arr].map((numberString)=>{return parseInt(numberString)}).sort()
    let maxArray = [...arr].map((numberString)=>{return parseInt(numberString)}).sort((a,b)=>{return b-a})
    for(let i=0;i<4;i++){
        minSum+=minArray[i];
        maxSum+=maxArray[i];
    }
    console.log(minSum+" "+maxSum)
}