function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let filteredKeyboards = keyboards.filter((keyboard)=>{return keyboard<b});
    let filteredDrives = drives.filter((drive)=>{return drive<b});
    let highestValue = 0
    let costSum  = 0

    filteredKeyboards.map((keyboard)=>{
        filteredDrives.map((drive)=>{
            costSum = keyboard + drive;
            if(costSum<=b){
                highestValue=costSum>highestValue?costSum:highestValue
                console.log(true, costSum, highestValue) //test log
            }else{
                console.log(false, costSum, highestValue) //test log
            }
        })
    })

    if (highestValue===0) {
        console.log("Exceeded Budget = -1")
        return -1
    } else {
        console.log(highestValue)
        return highestValue;
    }
}

getMoneySpent([40,50,60,58,52],[5,8,12],63)
getMoneySpent([4],[5],5)