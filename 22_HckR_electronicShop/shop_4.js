function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let allPossibleKeyboardMouseSums = []
    let filteredKeyboards = keyboards.filter((keybord)=>{return keybord<b});
    let filteredDrives = drives.filter((drive)=>{return drive<b});
    let currentHighestValue = 0;
    let prevHighestValue = 0;

    filteredKeyboards.map((keyboard)=>{
        filteredDrives.map((drive)=>{
            val = keyboard+drive
            currentHighestValue = val<b?val:-1;
        })
    })

    console.log(currentHighestValue);
}

getMoneySpent([40,50,60],[5,8,12],60)
getMoneySpent([4],[5],5)