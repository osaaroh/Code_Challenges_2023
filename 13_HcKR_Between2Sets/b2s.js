function getTotalX(a, b) {
    // Write your code here
    let factorArr1 = [];
    let multipleArr = [];
    let allArrays =[]
    
    a.forEach((element,index)=>{
        multipleArr[index] = []
        for(let i = 1; i <=100 ; i++){
            let value = i*element
            if (value<=100){
                multipleArr[index].push(value)
            }
        }
        console.log(multipleArr[index])
        console.log("*****")
        if(allArrays.length<1){
            allArrays = [...multipleArr[index]]
        } else{
        // allArrays = allArrays.filter(x => multipleArr[index].indexOf(x) !== -1)
        allArrays = allArrays.filter(x => multipleArr[index].includes(x))
        }
        
    })
    b.forEach((element,index)=>{
        factorArr1[index] = []
        for(let i = 1; i <=element ; i++){
            if (element%i==0){
                factorArr1[index].push(i);
            }
        }
        console.log(factorArr1[index])
        console.log("=========")
        allArrays = allArrays.filter(x => factorArr1[index].includes(x))
    })
    
    console.log("########")
    console.log(allArrays)
    console.log()

    return allArrays
}

// getTotalX([2,4],[16,32,96])
// getTotalX([2,6],[24,36])
// getTotalX([2],[20,40,12])
// getTotalX([1],[100])
getTotalX([100,99,98,97,96,95,94,93,92,91],[1,2,3,4,5,6,7,8,9,10])