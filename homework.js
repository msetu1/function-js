// Homework
// max number 
const num1 = 85;
const num2 = 45;
const num3 = 99;
if (num1 > num2 && num1 > num3) {
    console.log('biggest number is : num1');
}
else if (num2 > num1 && num2 > num3) {
    console.log('biggest number is : num2');
}
else {
    console.log('biggest number is : num3');
}

// min number 
if (num1 < num2 && num1 < num3) {
    console.log('smallest number is : num1');
}
else if (num2 < num1 && num2 < num3) {
    console.log('smallest number is : num2');
}
else {
    console.log('smallest number is : num3');
}

// math max and min number 

const BiggestNum = Math.max(num1, num2, num3);
console.log('biggest number', BiggestNum);
const smallestNum = Math.min(num1, num2, num3);
console.log('smallest number', smallestNum);