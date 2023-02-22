//1. feet to inche 
function feetToInche(feet) {
    const inche = feet * 12;
    return inche;
}
const myFeet = 5;
const myInche = feetToInche(myFeet);
console.log('feet :', myInche);

// 2.centimeter to meter 

function centimeterToMeter(centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}
const isCentimeter = 1000;
const isMeter = centimeterToMeter(isCentimeter);
console.log('meter :', isMeter);

/* 3.count paper 
book1-------->100;
book2-------->200;
book3-------->300; */

function paperRequirements(bookQuality) {
    const book1Piece = 3;
    const book2Piece = 10;
    const book3Piece = 15;
    if (bookPiece <= 100) {
        const piece = bookQuality * book1Piece;
        return piece;
    }
    else if (bookQuality <= 200) {
        const book1Piece = 100 * book2Piece
    }
    else if (bookQuality <= 200) {
        const book1Piece = 200 * book3Piece
    }
}
// 4.function is largest Number
const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
function bestfriend(friend) {

    for (let i = 0; i < friends.length; i++) {

    }
}
const largestName = bestfriend(friends);
console.log(largestName);

