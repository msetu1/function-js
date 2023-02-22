/* function incheTofeet(inches) {
    const feet = inches / 12;
    return (feet);
}
const myInche = 126;
const myFeet = incheTofeet(myInche);
console.log(myFeet); */

/* function mileToKilometer(miles) {
    const kilometer = miles * 1.609;
    return (kilometer);
}
const roadMiles = 4253;
const roadKilometer = mileToKilometer(roadMiles);
console.log('kilometer', roadKilometer); */

/* function isLeapYear(years) {
    const remainder = years % 4
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }


}
const myBirthDay = isLeapYear(2005);
console.log('my birthday', myBirthDay); */
/* function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
const myNumbers = [34, 76, 78, 90, 54];
getSum(myNumbers); */

/* function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
const myNumbers = [12, 582, 89, 63, 74, 58, 69, 45];
getSum(myNumbers); */

/* function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index]
        sum = sum + element
        console.log(index, element, sum)
    }
}
const myNumbers = [42, 85, 62, 85, 96, 45]
getSum(myNumbers) */

/* function getOddOfArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        if (element % 2 !== 0) {
            console.log(index, element);
        }
    }
}
const myNumbers = [12, 81, 96, 31, 75, 44, 89, 66]
getOddOfArray(myNumbers) */


/* function getOddOfArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        if (element % 2 !== 0) {
            console.log(index, element);
        }
    }
}
const myNumbers = [11, 52, 81, 93, 66, 99, 44];
getOddOfArray(myNumbers); */

/* function sumOfNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i
        console.log(i, sum)
    }
    return sum;
}
const myNumber = 20
sumOfNumber(myNumber) */

function multipleNumber(numbers) {
    let result = 1
    for (let i = 1; i <= 7; i++) {
        result = result * i
    }
    return result;
}
const myNumbers = multipleNumber(8)
console.log(myNumbers)