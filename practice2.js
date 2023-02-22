// inche to feet and miles to kilometer
// inche to feet 
/* function incheToFeeet(inches) {
    const feet = inches % 12
    return feet;
}
const myInche = 164;
const myFeet = incheToFeeet(myInche)
console.log('my feet:', myFeet); */

function incheToFeet(inches) {
    const feet = inches % 12;
    return feet;
}
const myInche = 150;
const myFeet = incheToFeet(myInche);
console.log('my feet:', myFeet);

// miles to kilometer

function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer
}
const roadMile = 123;
const roadKilometer = milesToKilometer(roadMile);
console.log('kilometer:', roadKilometer);

// sumodd number 
function evenIsArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;

}
const myNumber = [41, 52, 43, 93, 88, 99, 77, 44, 61];
const evenNumber = evenIsArray(myNumber)

// even number 

function isEven(numbers) {
    const remainder = numbers % 2
    console.log(remainder);
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myEvenNumber = isEven(1000);
console.log('even number:', myEvenNumber)

// odd number 

function isOddNum(numbers) {
    const remainder = numbers % 2;
    console.log(remainder);
    if (remainder == 1) {
        return true;
    }
    else {
        return false;
    }
}
const oddNumber = isOddNum(1001);
console.log('odd number:', oddNumber)

// leap year number 

function leapYearNumber(yrears) {
    const remainder = yrears % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const leapYear = leapYearNumber(1960);
console.log('my leap year number:', leapYear);

// factorial is multiple number 
