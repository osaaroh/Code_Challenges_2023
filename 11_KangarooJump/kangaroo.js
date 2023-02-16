function kangaroo(x1, v1, x2, v2) {
// Write your code here
if(x1<x2&&v1<=v2){
    return "NO"
}else{
    for(let i=0;i<=10000;i++){
        x1 +=v1;
        x2 +=v2;
        if(x1==x2){
            return "YES";
        }else if(x1>x2){
            return "NO";
        }
    }
    
    }
}