/*
This script will subtract 7 from the input number. Returns the subtraction if the subtraction is less than 7. Returns double of the input number if the minus is greater than 7
*/
function isLGSeven(number){
    if(typeof number === "number"){
        const minSeven = number - 7;
        if(minSeven >= 7 ){
            const double = minSeven * 2;
            return double;
        }
        else{
            return minSeven;
        }
    }
    else{
        return 'Input should be number';
    } 
}


console.log(isLGSeven(10));