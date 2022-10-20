//Javascript



//Constants

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        length: 304,
        read: true
    }
];
const section = document.querySelector('section');
const mask = document.querySelector('.mask');
const headerButtons = document.querySelectorAll('header button');
const addBookModalButtons = document.querySelectorAll('.addBookModal button');
const addBookModal = document.querySelector('.addBookModal');
const addBookModalTitle = document.querySelector('#title');
const addBookModalAuthor = document.querySelector('#author');
const addBookModalLength = document.querySelector('#length');
const addBookModalRead = document.querySelector('#read');
const addBookModalUnread = document.querySelector('#unread');
const removeBookModal = document.querySelector('.removeBookModal');
const removeBookModalButtons = document.querySelectorAll('.removeBookModal button');
const removeBookModalSelect = document.querySelector('.removeBookModal select optgroup');



//Global Functions

function updateBooks() {
    //clear current articles
    const currentArticles = document.querySelectorAll('article');
    currentArticles.forEach((article) => {
        section.removeChild(article);
    });
    //Generate new articles
    books.forEach((book) =>{
        createBook(book.title, book.author, book.length, book.read);
    });    
}

function createBook(title, author, length, read) {

    const article = document.createElement('article');
    section.appendChild(article);

    const div = document.createElement("div");
    article.appendChild(div);
    
    for (let i = 0; i < 6; i++) {
        const p = document.createElement('p');
        div.appendChild(p);
        switch (i) {
            case 0:  
            p.innerText = "Title:";
            break;

            case 1:
            p.innerText = '"' + title + '"';
            break;
            
            case 2:
            p.innerText = "Author:";
            break;

            case 3:
            p.innerText = author;
            break;

            case 4:
            p.innerText = "Length:";
            break;

            case 5:
            p.innerText = length + " pages";

        }
    }

    secondDiv = document.createElement('div');
    article.appendChild(secondDiv);

    const p = document.createElement('p');
    secondDiv.appendChild(p);

    const readImage = document.createElement('img');
    secondDiv.appendChild(readImage);

    if (read == true) {
        p.innerText = "Read";
        readImage.src = "images/check-mark-clip-art-8.jpg";
    } else if (read == false) {
        p.innerText = "Not Read";
        readImage.src = "images/23-233787_red-x-mark-transparent-background.png";
    }

}

function toggleAddBookModal() {
    mask.classList.toggle('active');
    addBookModal.classList.toggle('active');
}

function toggleRemoveBookModal() {
    mask.classList.toggle('active');
    removeBookModal.classList.toggle('active');
}

function startAddBookModal() {
    toggleAddBookModal();
}

function startRemoveBookModal() {
    toggleRemoveBookModal();
}

function generateBooksList() {
    const oldOptions = document.querySelectorAll('option');
    oldOptions.forEach((option) =>{
        removeBookModalSelect.removeChild(option);
    });

    books.forEach((book, index) =>{
        const newOption = document.createElement('option');
        removeBookModalSelect.appendChild(newOption);
        newOption.value = index;
        newOption.innerText = '"' + book.title + '," by ' + book.author;  
    });
}

function clearAddBookModal() {
    addBookModalTitle.value = "";
    addBookModalAuthor.value = "";
    addBookModalLength.value = "";
    addBookModalRead.checked = false;
    addBookModalUnread.checked = true;
}


//Event Listeners

//Header buttons
headerButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.innerText == "Add Book") {
            startAddBookModal();
            addBookModalButtons.forEach((button) =>{
                if (button.innerText == "Submit") {
                    button.focus();
                }
            });
        } else if (button.innerText == "Remove Book") {
            generateBooksList();
            startRemoveBookModal();
        }
    });
});


//Buttons on "Add" modal

addBookModalButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.innerText == "Submit") {
            let newBook = {};
            if (addBookModalTitle.value == "") {
                addBookModalTitle.setCustomValidity("Please Enter a Title");
                addBookModalTitle.reportValidity();
            } else {
                newBook.title = addBookModalTitle.value;
                newBook.author = addBookModalAuthor.value;
                newBook.length = addBookModalLength.value;
                newBook.read = addBookModalRead.checked;
                books.push(newBook);
                console.dir(books);
                updateBooks();
                toggleAddBookModal();
            }
        } else if (button.innerText == "Cancel") {
            toggleAddBookModal();
        }
        clearAddBookModal();

    })
});

//Buttons on "Remove" modal
removeBookModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText == "Submit") {
            const selectValue = document.querySelector('select').value;
            books.splice(selectValue, 1);
            toggleRemoveBookModal();
            updateBooks();
        } else if (button.innerText == "Cancel") {
            toggleRemoveBookModal();
        }
    })
});



//Initialize Articles
updateBooks();

