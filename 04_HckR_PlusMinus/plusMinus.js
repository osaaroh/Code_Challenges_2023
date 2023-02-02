function plusMinus(arr) {
    // Write your code here
    let ratioNeg;
    let ratioPos;
    let ratioZero;
    let arrLength = arr.length;
    let negativeVals = arr.filter((a)=>a<0).length;
    let zeroVals = arr.filter((a)=>a==0).length;
    let positiveVals = arr.filter((a)=>a>0).length;
    
    ratioPos = (positiveVals/arrLength).toFixed(6);
    ratioNeg = (negativeVals/arrLength).toFixed(6);
    ratioZero = (zeroVals/arrLength).toFixed(6);
    
    console.log(ratioPos)
    console.log(ratioNeg)
    console.log(ratioZero)
    return ratioPos, ratioNeg, ratioZero;
    
    

}