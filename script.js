const addBook = document.querySelector(".addBook");
const libraryContainer = document.querySelector(".library");
const dialog = document.querySelector("dialog");
const confirmButton = document.querySelector(".confirm");
const cancelButton = document.querySelector(".cancel");

const myLibrary = [];

addBook.addEventListener("click", () => {
    dialog.showModal();
});

confirmButton.addEventListener("click", (event)=> {
    event.preventDefault();
    newBook();
    dialog.close();
});

cancelButton.addEventListener("click", () => {
    dialog.closeModal();
});

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hadRead = hasRead;
};

function newBook(){
    const titleValue = document.querySelector("#book-title").value;
    const authorValue =  document.querySelector("#book-author").value;
    const pagesValue = document.querySelector("#page-numbers").value;
    let hasReadValue = document.querySelector("#has-read").checked;

    let hasRead;
    if (hasReadValue) {
        hasRead = true;
    } else {
        hasRead = false;
    }

    const book = new Book(titleValue, authorValue, pagesValue, hasReadValue);
    myLibrary.push(book);
    addBookToLibrary();

    function addBookToLibrary(){
        const card = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const pages = document.createElement("p");
        const hasRead = document.createElement("button");
        const deleteBook = document.createElement("button");
    
        card.classList.add("card");
        bookTitle.textContent = titleValue;
        bookTitle.classList.add("title");
        bookAuthor.textContent = "Author: " + authorValue;
        pages.textContent = pagesValue + "pages";
        hasRead.textContent = "Read";
        deleteBook.textContent = "Delete";
    
        card.appendChild(bookTitle)
        card.appendChild(bookAuthor)
        card.appendChild(pages);
        card.appendChild(hasRead)
        card.appendChild(deleteBook);
        document.querySelector(".library").appendChild(card);
      };
};




