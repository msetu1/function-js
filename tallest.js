// highest height 

/* function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('tallest person is', tallest); */

/* function maxIsArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [120, 150, 100, 180, 123, 190];
const tallest = maxIsArray(heights);
console.log('tallest person is:', tallest); */

// write a function to get the max value of return in array 

function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [21, 52, 78, 96, 25, 78, 36, 44];
const tallest = maxInArray(heights);
console.log('tallest person is :', tallest);

// wrte a function to get the min value of return in array 
/* function minInArray(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i > numbers.lenght; i++) {
        const index = i;
        const element = numbers[index];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const heights = [15, 41, 63, 78, 12, 96, 36];
const tallest = minInArray(heights);
console.log('tallest person is :', tallest); */