const myLibrary = [];

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        if (this.read){
            return `${this.title} by ${this.author}, ${this.pages} pages, has been read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

const book2 = new Book("Project Hail Mary", "Andy Weir", 496, true);

myLibrary.push(book1);
myLibrary.push(book2);

function addBookToLibrary() {

}

myLibrary.forEach(function(item){
    var li = document.createElement("li");
    var text = document.createTextNode(item.info());
    li.appendChild(text);
    document.getElementById("bookList").appendChild(li);
});