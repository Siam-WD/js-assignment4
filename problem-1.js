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

console.log(mindGame(5));
