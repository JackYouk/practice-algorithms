const daysOftheWeekArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function findDay(num){
    let numDay = daysOftheWeekArr[num];
    return numDay;
}

console.log(findDay(1));
console.log(findDay(5));
console.log(findDay(8));

// manny's solution (switch statement)
const getDayOfWeek = (number) => {
    switch(number) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return undefined;
    }
  };
  
  console.log(getDayOfWeek(6));