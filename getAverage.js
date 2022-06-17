function getAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / (arr.length);
    return avg;
}

console.log(getAverage([1, 4, 7]));
console.log(getAverage([10, 5]));
console.log(getAverage([1.5, 3, 2.5, 1]));