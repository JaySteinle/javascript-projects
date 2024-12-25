function makeLine(size) {
    let line = '';
    for (let i = 1; i <= size; i++) {
        line += '#' ;
    }
    return line 
}
//console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 1; i <= size; i++) {
        line += '#' + '\n';
    }
    return square 
}
/*
console.log(makeLine(5));
console.log(makeLine(5));
console.log(makeLine(5));
console.log(makeLine(5));
console.log(makeLine(5));
*/
function makeRectangle(width, height){
    let rectangle = '';
    for (let i = 1; i <= height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle
};
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height){
    let stairs = '';
    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i) + '\n';
    }
    return stairs
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let line = '';
    for (let i = 1; i <= numSpaces; i++) {
        line += ' ';
    }
    for (let i = 1; i <= numChars; i++) {
        line += '#';
    }
    for (let i = 1; i <= numSpaces; i++) {
        line += ' ';
    }
    return line
}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height){
    let triangle = '';
    for (let i = 1; i <= height; i++) {
        triangle += makeSpaceLine(height - i, 2 * i - 1) + '\n';
    }
    return triangle
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let diamond = '';
    for (let i = 1; i <= height; i++) {
        diamond += makeSpaceLine(height - i, 2 * i - 1) + '\n';
    }
    for (let i = height - 1; i >= 1; i--) {
        diamond += makeSpaceLine(height - i, 2 * i - 1) + '\n';
    }
    return diamond
}
console.log(makeDiamond(5));
