/* const fibo = [0, 1];
for (let i = 2; i <= 20; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo); */

/* const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */
// reverse character
/* function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}
const myString = 'I am alone';
reverseString(myString) */
// duplicate
/* const names = ['halima', 'sadia', 'onupoma', 'shanta', 'halima', 'sadia', 'onupoma', 'shanta'];
function removeDuplicate(names) {
    const unique = []
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) == false) {
            unique.push(name)
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName) */

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar')
    }
    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar')
    }
    else {
        console.log(i)
    }
}