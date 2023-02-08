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

console.log(gemsToDiamond(100, 5, 1));