var logBookBtn = document.getElementById('logBookBtn')
var saveBookBtn = document.getElementById('saveBookBtn')
var form = document.getElementById('saveForm')
var formModal = document.getElementById('formModal')
var titleInput = document.getElementById('title')
var authorInput = document.getElementById('author')
var pagesInput = document.getElementById('pages')
var readCheckbox = document.getElementById('read')
var cardWrapper = document.getElementById('cardwrapper')

logBookBtn.addEventListener('click', function(){
    formModal.showModal()
});

saveBookBtn.addEventListener('click', function(e){
    e.preventDefault()
    addBookToLibrary()
    console.log(myLibrary)
    form.reset()
    formModal.close()
    displayBooks(myLibrary)

});


const myLibrary = [];


function addBookToLibrary (){
    var titleContent = titleInput.value;
    var authorContent = authorInput.value;
    var pagesContent = pagesInput.value;
    var readContent = readCheckbox.checked ? "Read" : "Not Read"

    const newBook = new Book(titleContent, authorContent, pagesContent, readContent);
    myLibrary.push(newBook)
}

function displayBooks(library){
    cardWrapper.innerHTML = ' '
    library.forEach(book => {
        var card = document.createElement('div')
        card.classList.add('card')
        card.dataset.index = myLibrary.indexOf(book)

        var titleInParagraph = document.createElement('p')
        titleInParagraph.innerHTML = book.title
        card.appendChild(titleInParagraph)

        var authorParagprah = document.createElement('p')
        authorParagprah.innerHTML = book.author
        card.appendChild(authorParagprah)

        var pagesParagraph = document.createElement('p')
        pagesParagraph.innerHTML = book.pages
        card.appendChild(pagesParagraph)

        var readParagprah = document.createElement('button')
        readParagprah.innerHTML = book.read
        readParagprah.style.backgroundColor = readParagprah.innerHTML == "Read" ? "Green" : "Red"
        toggleRead(readParagprah)
        card.appendChild(readParagprah)

        var removeBookBtn = document.createElement('button')
        removeBookBtn.innerHTML = "Remove"
        removeBook(removeBookBtn, card)
        card.appendChild(removeBookBtn)


        cardWrapper.appendChild(card)

    });
}


function removeBook(removeButton, card){
    removeButton.addEventListener('click', function(){
        var id = card.dataset.index
        myLibrary.splice(id, 1)
        displayBooks(myLibrary)


    });
}

function toggleRead(readButton){
    readButton.addEventListener('click', function(){
        if (readButton.innerHTML == "Read"){
            readButton.style.backgroundColor = "Red"
            readButton.innerHTML = "Not Red"
        }else{
            readButton.style.backgroundColor = "Green"
            readButton.innerHTML = "Read"
        }
    });
}

function Book (title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}. ${this.pages}, ${read}`
    };
}


