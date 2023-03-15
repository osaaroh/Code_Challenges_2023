// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    //get cat and rat pos
    //check diff with z
    let catADistance =  Math.abs(x - z);
    let catBDistance =  Math.abs(y - z);
    //return smaller
    return catADistance < catBDistance ? "Cat A": catBDistance<catADistance? "Cat B":"Mouse C";
    //return mouse
}

console.log(catAndMouse(1,3,2))