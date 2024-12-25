function funPhrase(phrase) {
    if (phrase.length <= 100) {
        const modifiedString = phrase.charAt(phrase.length - 1);
        return `We put the '${modifiedString}' in '${phrase}'.`;
    } else {
        return "String length is greater than 3";
    }
}
console.log(funPhrase("Functions rock!")); // We put the 'o' in 'Hello'.