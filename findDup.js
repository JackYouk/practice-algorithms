function findDup(intArray){
    for(let i = 0; i < intArray.length; i++){
        let x = intArray[i];
        for(let j = i + 1; j < intArray.length; j++){
            if(x === intArray[j]){
                return x;
            }
        }
    }
    return;
}

console.log(findDup([2, 5, 6, 3, 5]));
console.log(findDup([1, 3, 4, 1, 3, 4]));
console.log(findDup([2, 4, 5]));