function sockMerchant(n, ar) {
    let numOfPairs = 0;
    // Write your code here
    //STEP 1
    //1. Sort Array
    //2. break split in arrary twos
    //3. Count split Pairs
    
    //STEP 2
    //1. Get Array Set
    let arraySet = [...new Set(ar)].sort()
    //2. Filter the set to have diff array of numbers
    arraySet.forEach((number)=>{
        let currentArrayCount = ar.filter((comparedNum)=>{
            return number === comparedNum
        })
        //3. Count length of array / 2
        //4. Sum all lengths together to get pairs
        if(currentArrayCount.length%2!==0){
            numOfPairs += (currentArrayCount.length-1)/2
        } else{
            numOfPairs += (currentArrayCount.length)/2
        }
    })
    console.log(numOfPairs)
    return numOfPairs
}
