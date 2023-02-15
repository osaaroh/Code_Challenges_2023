function birthdayCakeCandles(candles) {
    // Write your code here
    let largestValue = 0;
    
    candles.forEach((candle)=>{
        if (candle>largestValue){
            largestValue = candle
        } 
    })
    console.log(candles.filter(a=>a===largestValue).length);
    // return candles.filter(a=>a===largestValue).length;
}

birthdayCakeCandles([3,3,1,3])