function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let allPossibleKeyboardMouseSums = []
    let filteredKeyboards = keyboards.filter((keybord)=>{return keybord<b});
    let filteredDrives = drives.filter((drive)=>{return drive<b});

    filteredKeyboards.map((keyboard)=>{
        filteredDrives.map((drive)=>{
            allPossibleKeyboardMouseSums = [...allPossibleKeyboardMouseSums, keyboard+drive]
        })
    })

    console.log(allPossibleKeyboardMouseSums)

    let totalWithinBudget = allPossibleKeyboardMouseSums.filter((totalPrice)=>{
        return totalPrice <= b 
    })
    if (totalWithinBudget.length===0) {
        console.log("Exceeded Budget = -1")
        return -1
    } else {
        console.log(Math.max(...totalWithinBudget))
        return Math.max(...totalWithinBudget)
    }
}

getMoneySpent([40,50,60],[5,8,12],60)
getMoneySpent([4],[5],5)