// revers 

/* function reverseText(texts) {
    let reversed = '';
    for (let i = texts.length - 1; i >= 0; i--) {
        const element = texts[i];
        reversed = reversed + element;
        console.log(element, reversed);

    }
    return reversed;
}
const mystring = "I am a good student";
const reversed = reverseText(mystring);
console.log("reversed output :", reversed); */

// reverse words
function stringWord(str) {
    const words = str.split(' ')
    const result = []
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element)
    }
    console.log(result);
}
const myString = 'I am a good girl';
stringWord(myString);