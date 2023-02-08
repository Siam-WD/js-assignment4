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

console.log(evenOdd('phero'));