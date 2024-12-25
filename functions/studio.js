let arr = ['hello', 'world', 123, 'orange'];

//arr.reverse();
//console.log(arr);

function reverseCharacters(str) {
    return str.split('').reverse().join('');
}

let reversedArr = arr.map(item => {
    if (typeof item === 'string' || typeof item === 'number') {
        return reverseCharacters(item.toString());
    }
    return item;
});

console.log(reversedArr);
