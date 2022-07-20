const singleWord = (str) => {
    return str.replace(/\s/g, "").toLowerCase();
}

console.log(singleWord('Tammer Galal'));
console.log(singleWord('   One    WoRd'));
