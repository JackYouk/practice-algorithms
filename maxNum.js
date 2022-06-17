

function maxNum(array){
    let numArr = array;
    let maxNum = 0;
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] > maxNum){
            maxNum = numArr[i];
        }
    }
    return maxNum;
}

console.log(maxNum([1,9,6,2,5]));