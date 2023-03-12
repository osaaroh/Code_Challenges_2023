function pageCount(n, p) {
    // Write your code here
    let array = [...Array(n+1).keys()]
    let pagesChunk = [];
    let shortestSwipe = 0;
    reachedPageFromFront=false;
    reachedPageFromBack=false;
    const chunkSize = 2;
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        pagesChunk = [...pagesChunk,chunk]
    }

    const pagesChunkReversed = [...pagesChunk].reverse()
    

    for (let index = 0; index < pagesChunk.length; index++) {
        shortestSwipe=index
        pagesChunk[index].includes(p)?reachedPageFromFront=true:reachedPageFromFront=false
        pagesChunkReversed[index].includes(p)?reachedPageFromBack=true:reachedPageFromBack=false
        if(reachedPageFromFront==true||reachedPageFromBack==true){
            break;
        }
    }

    console.log(pagesChunk)
    console.log(pagesChunkReversed)
    console.log(shortestSwipe);
    
}

// pageCount(5,4)
pageCount(86619,28906)