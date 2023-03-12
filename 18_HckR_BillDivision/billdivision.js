function bonAppetit(bill, k, b) {
    // Write your code here
    //remove the item not consumed from array with splice, mutates the array bill with(index,no_of_items_to_remove)
    let removedAnnaChoice = bill.splice(k,1)
    console.log(removedAnnaChoice)   
    let actualCostAnnaToPay = bill.reduce((a,b)=>{return a+b})/2
    if(actualCostAnnaToPay==b){
        console.log("Bon Appetit")
        return "Bon Appetit"
    }else{
        console.log(b-actualCostAnnaToPay)
        return b-actualCostAnnaToPay
    }          
}

bonAppetit([3,10,2,9],1,12)