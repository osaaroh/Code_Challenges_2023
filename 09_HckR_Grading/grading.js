function gradingStudents(grades) {
     // Write your code here
    let approx = grades.map((grade)=>{
        let nextMultiple5 = (grade - grade%5) + 5
        if(grade<38){
            return grade
        }
        else if((nextMultiple5-grade)<3){
            return nextMultiple5
        }
        else{
            return grade
        } 
    })

    console.log(approx)
    return approx
}

gradingStudents([ 13, 23, 36, 41, 72, 84, 90])