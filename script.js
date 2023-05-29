let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, true);
const book2 = new Book("The Lightning Thief", "Rick Riordan", 377, true);
myLibrary.push(book1);
myLibrary.push(book2);
function printAllInfo(array) {
    for(let i = 0; i < array.length; i ++){
        console.log(array[i].info());
    }
}

printAllInfo(myLibrary);

const addButton = document.querySelector(".add-book");
const popUpOverlay = document.querySelector(".popup-form-overlay")
const popUpForm = document.querySelector(".popup-form")


addButton.addEventListener("click", ()=> {
    popUpOverlay.classList.add("popup-show");
})
popUpOverlay.addEventListener("click", (event) => {
        if (!popUpForm.contains(event.target)) {
        popUpOverlay.classList.remove("popup-show");
        
    }
});

let submit = document.querySelector(".submit-form");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let checkBox = document.getElementById("read")

submit.addEventListener("click", (event) => {
    let newBook = new Book(title.value,author.value,pages.value,checkBox.checked);
    if(title.value !== "" && author.value !== "" && pages.value !== ""){
        popUpOverlay.classList.remove("popup-show");
        event.preventDefault();
        addBookCard(newBook);
        title.value = "";
        author.value = "";
        pages.value = "";
    }
})

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("not-read")) {
        const bookElement = target.parentElement;
        if (target.innerHTML === "Read") {
            target.innerHTML = "Not Read";
            target.classList.remove("read");
        } else {
            target.innerHTML = "Read";
            target.classList.add("read");
        }
    }
});

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("remove")) {
        const bookElement = target.parentElement;
        if(bookElement){
            bookElement.remove();
        }
    }
});


function addBookCard(Book) {
    console.log("yes");
    let books = document.querySelector(".books");
    let book = document.createElement("div");
    book.classList.add("book")
    books.append(book);
    let bookTitle = document.createElement("div");
    bookTitle.className = "book-title";
    let title = document.createElement("div");
    title.innerHTML = `Title: ${Book.title}`;
    bookTitle.append(title);
    book.append(bookTitle);
    let bookAuthor = document.createElement("div");
    bookAuthor.className = "author"
    let author = document.createElement("div");
    author.innerHTML = `Author: ${Book.author}`;
    bookAuthor.append(author);
    book.append(bookAuthor);
    let bookPages = document.createElement("div");
    bookPages.className = "pages"
    let pages = document.createElement("div");
    pages.innerHTML = `Pages: ${Book.pages}`;
    bookPages.append(pages);
    book.append(bookPages);
    let readStatus = document.createElement("button");
    readStatus.classList.add("not-read");
    readStatus.innerHTML = "Not Read";
    if(Book.read){
        readStatus.classList.add("read");
        readStatus.innerHTML = "Read"
    }
    book.append(readStatus);
    let removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.innerHTML = "Remove";
    removeButton.classList.add(spacesToDash(`${Book.title}`))
    book.append(removeButton);

}

function spacesToDash(title){
    let rephrased = "";
    for(let i = 0; i < title.length; i++){
        if (title[i] === " "){
            rephrased += "-"
        }
        else{
            rephrased += title[i];
        }
    }
    return rephrased
}