// Define your Book class here:
class Book{
    constructor(title, author, copyright, isbn, pages,timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses = 1){
        this.timesCheckedOut += uses;
        return this.timesCheckedOut;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded, topic){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
        this.topic = topic;
    }
    dispose() {
        const currentYear = new Date().getFullYear();
        //console.log(typeof (new Date().getFullYear()));
        if (currentYear - this.copyright > 5) {
            return "Yes";
        }
        return "No";
    }
}

class Novel extends Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded, genre){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
        this.genre = genre;
    }
    dispose(){
        if(this.timesCheckedOut > 100){
            this.discarded = 'Yes';
        }
        return 'No';
    }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrejedice = new Novel( 'Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No', 'Romance');
let makeTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 	1000000000000, 1147, 1, 'No', 'Space Travel');

// Code exercises 4 & 5 here:
prideAndPrejedice.checkout(5);
prideAndPrejedice.dispose();
makeTheShip.checkout(3);
makeTheShip.dispose();

//console.log(prideAndPrejedice);
console.log(prideAndPrejedice.dispose());
console.log(prideAndPrejedice.checkout(5));
console.log(makeTheShip.dispose());
console.log(makeTheShip.checkout(3));
//const currentYear = new Date().getFullYear();
//console.log(typeof (new Date().getFullYear()));
//console.log(currentYear);