// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'

// All numbers will be whole numbers greater than 0.

const expandedForm = (num) => {
  let numberLeft = num;
  let answerArray = [];

  while (numberLeft > 0) {
    let numberStringArray = numberLeft.toString().split("");
    let zeroString = "0";
    let firstChar = numberStringArray[0];
    let numZeroes = zeroString.repeat(numberStringArray.length - 1);
    let flatNum = `${firstChar}`.concat(`${numZeroes}`);
    answerArray.push(flatNum);
    numberLeft -= flatNum;
  }
  return answerArray.join(' + ')
};

console.log(expandedForm(70304));
