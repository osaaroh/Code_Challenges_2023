let testSet = [...new Set([1, 3, 2, 6, 1, 2])]

function migratoryBirds(arr) {
    // Write your code here
    let arraySet = [...new Set(arr)].sort()
    let highestFreq = 0
    let previousArrayCount = 0;
    console.log(arraySet)
    arraySet.forEach((number)=>{
        let currentArrayCount = arr.filter((comparedNum)=>{
            return number === comparedNum
        })
        console.log(currentArrayCount)
        if (currentArrayCount.length>previousArrayCount){
            highestFreq = number
            previousArrayCount = currentArrayCount.length
        }
    })
    
    console.log(highestFreq)
    return highestFreq
}

// migratoryBirds([1, 3, 2, 6, 1, 2])
// migratoryBirds([2,4,3,2,3,1,2,1,3,3])
migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])
