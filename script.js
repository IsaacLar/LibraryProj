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

//Add 2 books to the library initially
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("Project Hail Mary", "Andy Weir", 496, true);

myLibrary.push(book1);
myLibrary.push(book2);

//Hide "new book" form
function hideForm(){
    document.getElementById("titleInput").style.visibility = "hidden";
    document.getElementById("authorInput").style.visibility = "hidden";
    document.getElementById("pagesInput").style.visibility = "hidden";
    document.getElementById("bookRead").style.visibility = "hidden";
    document.getElementById("bookReadLabel").style.visibility = "hidden";
}

function addBookToLibrary() {
    //Obtain inputted information
    var titleField = document.getElementById("titleInput");
    var authorField = document.getElementById("authorInput");
    var pagesField = document.getElementById("pagesInput");
    var bookReadField = document.getElementById("bookRead");

    var title = titleField.value;
    var author = authorField.value;
    var pages = pagesField.value;
    var bookRead = bookReadField.checked; 

    //Create book object
    var newBook = new Book(title, author, pages, bookRead);

    //Add new book object to library array
    myLibrary.push(newBook);

    //Reset input fields on front end
    titleField.value = '';
    authorField.value = '';
    pagesField.value = '';
    bookReadField.checked = false;

    //Display the book information on screen
    printBook(newBook);

    //Hide new book form when data has been saved
    hideForm();
}

//Function to print all lists in the library in an unstructured list
function printBook(bookParam){
    //Create list element
    var li = document.createElement("li");
    //Create text element containing book information
    var text = document.createTextNode(bookParam.info());
    //Add book text to the list element as a child
    li.appendChild(text);
    //Add list element to the book list as a child
    document.getElementById("bookList").appendChild(li);
}

function makeFormVisible(){
    document.getElementById("titleInput").style.visibility = "visible";
    document.getElementById("authorInput").style.visibility = "visible";
    document.getElementById("pagesInput").style.visibility = "visible";
    document.getElementById("bookRead").style.visibility = "visible";
    document.getElementById("bookReadLabel").style.visibility = "visible";
}

//Hide new book form initially when the page loads
hideForm();

//Print information for all books already stored in the library array
myLibrary.forEach(function(item){
        printBook(item);
    });
