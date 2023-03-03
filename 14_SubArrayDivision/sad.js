function birthday(s, d, m) {
    // Write your code here
    
    
    let i = 0;
    let j = m;
    let count = 0
    
    do {
        let n_array = s.slice(i,j)
        if (n_array.reduce((a,b)=>a+b)==d){
            count+= 1
        }
        i+=1;
        j+=1; 
    } while (j<= s.length);

    
    // console.log([2, 2, 1, 3, 2].reduce((a,b)=>a+b));
    console.log(count)
    return count;

}

// let segments = [2,5 ,1, 3, 4 ,4 ,3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1]
// let segments = [2, 2, 1, 3, 2]
let segments = [1, 1, 1, 1, 1, 1]

birthday(segments,3,2)