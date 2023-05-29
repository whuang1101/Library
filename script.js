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
    // Check if the click target is the popUpForm or its descendants
    if (!popUpForm.contains(event.target)) {
        popUpOverlay.classList.remove("popup-show");
    }
});







