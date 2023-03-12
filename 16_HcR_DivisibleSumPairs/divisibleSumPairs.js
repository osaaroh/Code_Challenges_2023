function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let valid_pairs = [];
    ar.forEach((number,index)=>{
        for(let i=0;i<n;i++){
            if(i!==index){
                if ((number+ar[i])%k==0&&index<i){
                    valid_pairs = [...valid_pairs,[number, ar[i]]]
                }
            }
        }
    })
    
    console.log(valid_pairs.length);
    return valid_pairs.length;

}

divisibleSumPairs(6,3,[1,3,2,6,1,2])