function isPalindrome(str){
    let string = str.toLowerCase();
    let stringBackwards = "";

    for(i = string.length - 1; i >= 0; i--){
        stringBackwards += string[i];
    }

    if(stringBackwards === string){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('Noon'));
console.log(isPalindrome('horse'));
console.log(isPalindrome('racecar'));
