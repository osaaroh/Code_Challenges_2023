function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let allPossibleKeyboardMouseSums = []
    keyboards.map((keyboard)=>{
        drives.map((drive)=>{
            allPossibleKeyboardMouseSums = [...allPossibleKeyboardMouseSums, keyboard+drive]
        })
    })

    console.log(Math.max(...allPossibleKeyboardMouseSums.filter((totalPrice)=>{
        return totalPrice <= b 
    })))
    return Math.max(...allPossibleKeyboardMouseSums.filter((totalPrice)=>{
        return totalPrice <= b 
    }))

}

// getMoneySpent([40,50,60],[5,8,12],60)
getMoneySpent([4],[5],5)