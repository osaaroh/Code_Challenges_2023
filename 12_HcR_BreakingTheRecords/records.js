function breakingRecords(scores) {
    // Write your code here
    let currentHighScore = scores[0];
    let currentLowScore = scores[0];
    let highCount = 0;
    let lowCount = 0;
    
    scores.forEach((score,index)=>{
        if (score > currentHighScore){
            currentHighScore = score;
            highCount +=1
        }
        else if (score < currentLowScore){
            currentLowScore = score;
            lowCount +=1
        }
    })
    
    return [highCount, lowCount]
    

}
