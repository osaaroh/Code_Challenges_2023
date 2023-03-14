function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let valleyCount = 0;
    let splitPath = path.split("")
    splitPath.forEach((step,index)=>{
        if(step=="U"){
            seaLevel += 1;
            if(seaLevel===0){
                valleyCount+=1;
            }
        }
        if(step=="D"){
            seaLevel -= 1;
        }
        console.log(seaLevel, valleyCount)

    })
    return valleyCount
}

// countingValleys(8, "UDDDUDUU")
countingValleys(8, "DDUUDDUDUUUD")