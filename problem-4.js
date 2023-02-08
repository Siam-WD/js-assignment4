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

const numbers = [ -4, -9, -5, -33, -55 ];
const find = findingBadData(numbers);
console.log(find);
