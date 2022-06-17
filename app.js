function sumBeforeInteger(int){
    let x = 0;
    for (let i = 0; i <= int; i++){
        x += i;
    }

    return x;
}

console.log(sumBeforeInteger(2));
console.log(sumBeforeInteger(4));
console.log(sumBeforeInteger(10));

