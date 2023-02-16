function timeConversion(s) {
    // Write your code here
    let timeOfDay = s.slice(-2);
    let hour = s.slice(0,2);
    let minuteSecs = s.slice(3,8)
    
    if(timeOfDay.toUpperCase()=="PM"){
        if (hour=="12"){
            hour="12"
        }else{
            hour=parseInt(hour)+12
        }  
    }
    else{
     if(hour=="12"){
         hour = "00";
     }
    } 
    console.log(hour+":"+minuteSecs)
    return hour+":"+minuteSecs
}