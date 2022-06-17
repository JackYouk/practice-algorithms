const daysOftheWeekArr = ['sunday', 'monday', 'tuesday', 'thursday', 'friday', 'saturday'];

function findDay(num){
    let numDay = daysOftheWeekArr[num];
    return numDay;
}

console.log(findDay(1));
console.log(findDay(5));
console.log(findDay(8));