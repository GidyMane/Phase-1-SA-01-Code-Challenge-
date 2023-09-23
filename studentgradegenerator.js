
function studentGradeGenerator(){
   
    const marks = parseInt(prompt("Enter student's marks (0-100):"));
    // conditions
    if (marks > 79 && mark <=100){
        return "A"
    }
    else if(marks>=60 && marks<=79){
        return "B"
    }
    else if(marks>=50 && marks<=59){
        return "c"
    }
    else if(marks>=40 && marks <=49){
        return "D"
    }
    else if(marks<40 && marks>=0){
        return "E"
    }
    else {
        // adding alert
        alert("Invalid input! Please enter a number between 0 and 100.")
    }


} 
console.log(studentGradeGenerator())

