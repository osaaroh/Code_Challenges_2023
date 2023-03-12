function pageCount(n, p) {
    let array = [...Array(n+1).keys()]
    let shortestSwipe = 0;
    let countFromFront = 0;
    let countFromBack = 0;
    const arrayReversed = [...array].reverse()

    //We know the pages ae in groups of twos starting from page 0, therefore the page swipe will always 
    //be half the index of the number in the array.
    countFromFront = array.indexOf(p)%2==0?array.indexOf(p)/2:(array.indexOf(p)-1)/2
    //From the back of the book only the last page stands alone " The last page may only be printed on the front, given the length of the book"
    //so no group of two when the book count is odd
    countFromBack = arrayReversed.indexOf(p)%2==0?arrayReversed.indexOf(p)/2:arrayReversed.length%2!=0&&arrayReversed.indexOf(p)==1?1:(arrayReversed.indexOf(p)-1)/2;

    //We compare the two values and return the smallest
    countFromFront>countFromBack?shortestSwipe=countFromBack:shortestSwipe=countFromFront;
    console.log(array.indexOf(p));
    console.log(arrayReversed.indexOf(p));
    console.log(countFromFront)
    console.log(countFromBack)
    console.log(array, arrayReversed)
    
}

pageCount(5,4)
// pageCount(86619,28906)