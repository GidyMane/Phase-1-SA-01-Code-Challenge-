
function speedDetector(speed){

    const speedLimit= 70;
    const kmPerDemerit = 5;
    if (speed< speedLimit){
        return "Ok."
    }
    else {
       const demeritPoints= Math.floor((speed-speedLimit) /5); 
        console.log("Points:", demeritPoints) ;

        if (demeritPoints > 12 ){
            return "License suspended"
        };
    }


}