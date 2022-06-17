// Write a function that takes in a string and outputs the number of vowels (not counting y).
//
// Ex:
//   Input: "hEllO"
// Output: 2
//
// Input: "you are great!"
// Output: 6
//
// Input: "why?"
// Output: 0
const countVowels = string => {
    let vowelCount = 0;
    for (let i = 0; i < string.length; i++) {
     const currentLetter = string[i].toLowerCase();
     if (
      currentLetter === 'a' ||
      currentLetter === 'e' ||
      currentLetter === 'i' ||
      currentLetter === 'o' ||
      currentLetter === 'u'
     ) {
      vowelCount++;
     }
    }
    return vowelCount;
   }
   console.log(countVowels('hEllO wOrld'));