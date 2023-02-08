//Problem 1: Let’s play a mind game

/*
This is a calculation script. First multiply the input number by 3, then add 10 to that product, then divide by 2. And 5 will be subtracted at the end.
*/
function  mindGame(number){
    if(typeof number === "number"){
        const into = number * 3;
        const sum = into + 10;
        const div = sum / 2;
        const minus = div - 5;
        return minus;
    }
    else{
        return 'Please enter a number';
    } 
}

//Problem 2: Finding even or odd

/*
This is a even/odd script called evenOdd. It returns the number of characters in the input string.
*/

function evenOdd(str){
    if(typeof str === "string"){
        if(str.length % 2 == 0){
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else{
        return 'Input should be string';
    } 
}

//Problem 3: Is Less or Greater than seven

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

//Problem 4: Finding Bad data

/*
Counts the minus numbers inside the input array as bad data and returns the number of bad data.
*/
function findingBadData(numbers){
    if(Array.isArray(numbers)){
        let badData = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            badData.push(numbers[i]);
        }
    }
    return badData.length;
    }
    else{
        return 'Input should be array';
    }  
}

//Problem 5: Convert your gems into diamond
/*
Three friends have different gem powers. A gem of the first friend equals 21 diamonds. 1 gem of second friend equals 32 diamonds and 1 gem of third friend equals 43 diamonds. If their diamond number is less than 2000, the function returns the sum, and if the sum is greater than 2000, it subtracts 2000 from the sum and returns the minus.
*/
function  gemsToDiamond(friend1, friend2, friend3 ){
    if(typeof friend1 === 'number' && typeof friend2 === 'number' && typeof friend3 === 'number'){
        const fnd1Diamond = friend1 * 21;
    const fnd2Diamond = friend2 * 32;
    const fnd3Diamond = friend3 * 43;
    const totalDiamond = fnd1Diamond + fnd2Diamond + fnd3Diamond;
    if(totalDiamond >= 2000){
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }
    }
    else{
        return 'Input should be number';
    }
}