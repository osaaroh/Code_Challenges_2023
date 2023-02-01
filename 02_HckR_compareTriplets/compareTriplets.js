function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    b.forEach((bscore,index)=>{
        bscore>a[index]?bobScore+=1:a[index]>bscore?aliceScore+=1:'';
    })
    console.log([aliceScore, bobScore])
    return [aliceScore, bobScore]
    
}