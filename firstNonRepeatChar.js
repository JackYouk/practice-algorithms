function firstNonRepeatChar(str){

    for(i = 0; i < str.length; i++){
        let letter = str[i];
        if(str.split(letter).length - 1 === 1){
            return letter;
        }
    }
}

console.log(firstNonRepeatChar('the quick brown fox jumps over the calm kitten quietly'));
console.log(firstNonRepeatChar('this hat is the greatest!'));
console.log(firstNonRepeatChar('what a wonderful day it has been'));
console.log(firstNonRepeatChar('Duuuuuvaaaal'));
console.log(firstNonRepeatChar('annakin'));